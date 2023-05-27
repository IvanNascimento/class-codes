package Escola;

/**
 * @author Ivan
 * @email ivanluis431@gmail.com
 */
public class StudentRecord {
  //  Atributos
    private String name;
    private String address;
    private int    age;
    private double mathGrade;
    private double englisGrade;
    private double scienceGrade;
    
  //  Atributos Staticos
    private static int studentCount;
    
  // Métodos construtores
    public StudentRecord(){
        studentCount++;
    }
    public StudentRecord(String name){
        this.name = name;
    }
    public StudentRecord(String name, String address){
        this.name = name;
        this.address = address;
    }
    public StudentRecord(double mGrade, double eGrade, double sGrade){
        this.mathGrade = mGrade;
        this.englisGrade = eGrade;
        this.scienceGrade = sGrade;
    }
    
  //  Métodos get
    public String getName(){
        return this.name;
    }
    public String getAddress(){
        return this.address;
    }
    public int getAge(){
        return this.age;
    }
    public double getMathGrade(){
        return this.mathGrade;
    }
    public double getEnglisGrade(){
        return this.englisGrade;
    }
    public double getScienceGrade(){
        return this.scienceGrade;
    }
    
    public double getAverage(){
        double result;
        result = (mathGrade+englisGrade+scienceGrade)/3;
        return result;
    }
  //  Métodos set
    public void setName(String name){
        this.name = name;
    }
    public void setAddress(String address){
        this.address = address;
    }
    public void setAge(int age){
        this.age = age;
    }
    public void setMathGrade(double mathGrade){
        this.mathGrade = mathGrade;
    }
    public void setEnglisGrade(double englisGrade){
        this.englisGrade = englisGrade;
    }
    public void setScienceGrade(double scienceGrade){
        this.scienceGrade = scienceGrade;
    } 
  //  Método getStatico
    public static int getStudentCount(){
        return studentCount;
    }
  // Métodos print
    public void print(){
        System.out.println("Name: " + this.name);
        System.out.println("Address: " + this.address);
        System.out.println("Age: " + this.age);
    }
    public void print(double eGrade, double mGrade, double sGrade){
        System.out.println("Name: " + this.name);
        System.out.println("Math Grade: " + mGrade);
        System.out.println("English Grade: " + eGrade);
        System.out.println("Science Grade: " + sGrade);
    }

}