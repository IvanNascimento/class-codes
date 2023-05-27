angular.module('ImageApp', [])
  .directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
  }])
  .service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
        });
    }
  }])
  .controller('MainCtrl', function($scope, $http, $sce, fileUpload){

    var e = this;

    this.info = {
      link: "",
      username: "",
      images: {}
    }

    this.login = function(){
      login(function(result){
        //console.log(result);
        localStorage['token'] = result.token
      });
    }

    this.getLink = function(){
      $http.get("https://backend-dot-webdev-ifpb.appspot.com/img/submit", {
        headers: {
          authorization: "Bearer " + localStorage['token']
        }
      }).then(function(result){
        //console.log(result);
        e.info.link = $sce.trustAsResourceUrl(`https://backend-dot-webdev-ifpb.appspot.com/img/submit/${result.data.user_id}/${result.data.file_id}`)
      })
    }

    this.getMe = function() {
      $http.post("http://localhost:3000/perfil",
        { token: localStorage['token']
      }).then(function(result){
        console.log(result);
        e.info.images = result.data.images;
        e.info.username = result.data.username;
    })
  }

  this.submit = function(){
    fileUpload
      .uploadFileToUrl($scope.myImage, e.info.link)
      .then(function(result){
      //console.log(result.data);
      e.info.images.push(result.id);
    })
  }

  this.getMe();
  this.getLink();

});
