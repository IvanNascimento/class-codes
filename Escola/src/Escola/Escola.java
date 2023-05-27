package Escola;

/**
 * @author Ivan
 * @email ivanluis431@gmail.com
 */

public class Escola {
    public static void main(String[] args) {
        StudentRecord Ivan = new StudentRecord();
        StudentRecord Carol = new StudentRecord();
        StudentRecord Diego = new StudentRecord();
        StudentRecord Pedro = new StudentRecord();
        StudentRecord Anderson = new StudentRecord();
        StudentRecord Gerssicleiton = new StudentRecord();
        StudentRecord Thiago = new StudentRecord();
        StudentRecord Camila = new StudentRecord();
        StudentRecord Aline = new StudentRecord();
        StudentRecord Felipe = new StudentRecord();
        StudentRecord Jayde = new StudentRecord();
        StudentRecord Joan = new StudentRecord();
        
        Ivan.setName("Ivan");
        Ivan.setAddress("RN");
        Ivan.setAge(16);
        Ivan.setMathGrade(75);
        Ivan.setEnglisGrade(80);
        Ivan.setScienceGrade(70);
        
        Carol.setName("Carol");
        Carol.setAddress("PB");
        Carol.setAge(16);
        Carol.setMathGrade(80);
        Carol.setEnglisGrade(100);
        Carol.setScienceGrade(70);
        
        Diego.setName("Diego");
        Diego.setAddress("PB");
        Diego.setAge(16);
        Diego.setMathGrade(75);
        Diego.setEnglisGrade(80);
        Diego.setScienceGrade(70);
        
        Pedro.setName("José Pedro");
        Pedro.setAddress("PB");
        Pedro.setAge(16);
        Pedro.setMathGrade(75);
        Pedro.setEnglisGrade(80);
        Pedro.setScienceGrade(70);
        
        Anderson.setName("Anderson");
        Anderson.setAddress("PB");
        Anderson.setAge(16);
        Anderson.setMathGrade(75);
        Anderson.setEnglisGrade(80);
        Anderson.setScienceGrade(70);
        
        Gerssicleiton.setName("Gerssicleiton");
        Gerssicleiton.setAddress("RN");
        Gerssicleiton.setAge(16);
        Gerssicleiton.setMathGrade(75);
        Gerssicleiton.setEnglisGrade(80);
        Gerssicleiton.setScienceGrade(70);
        
        Thiago.setName("Thiago");
        Thiago.setAddress("RN");
        Thiago.setAge(16);
        Thiago.setMathGrade(75);
        Thiago.setEnglisGrade(80);
        Thiago.setScienceGrade(70);
        
        Camila.setName("Camila");
        Camila.setAddress("PB");
        Camila.setAge(16);
        Camila.setMathGrade(75);
        Camila.setEnglisGrade(80);
        Camila.setScienceGrade(70);
        
        Aline.setName("Aline");
        Aline.setAddress("PB");
        Aline.setAge(16);
        Aline.setMathGrade(75);
        Aline.setEnglisGrade(80);
        Aline.setScienceGrade(70);
        
        Felipe.setName("Felipe");
        Felipe.setAddress("PB");
        Felipe.setAge(16);
        Felipe.setMathGrade(75);
        Felipe.setEnglisGrade(80);
        Felipe.setScienceGrade(70);
        
        Jayde.setName("Jayde");
        Jayde.setAddress("PB");
        Jayde.setAge(16);
        Jayde.setMathGrade(75);
        Jayde.setEnglisGrade(80);
        Jayde.setScienceGrade(70);
        
        Joan.setName("Joan");
        Joan.setAddress("PB");
        Joan.setAge(16);
        Joan.setMathGrade(75);
        Joan.setEnglisGrade(80);
        Joan.setScienceGrade(70);
        
        Ivan.print();
        Ivan.print(Ivan.getEnglisGrade(),Ivan.getMathGrade(),Ivan.getScienceGrade());

        Carol.print();
        Carol.print(Carol.getEnglisGrade(),Carol.getMathGrade(),Carol.getScienceGrade());
        
        Diego.print();
        Diego.print(Diego.getEnglisGrade(),Diego.getMathGrade(),Diego.getScienceGrade());
        
        Pedro.print();
        Pedro.print(Pedro.getEnglisGrade(),Pedro.getMathGrade(),Pedro.getScienceGrade());
        
        Anderson.print();
        Anderson.print(Anderson.getEnglisGrade(),Anderson.getMathGrade(),Anderson.getScienceGrade());
        
        Gerssicleiton.print();
        Gerssicleiton.print(Gerssicleiton.getEnglisGrade(),Gerssicleiton.getMathGrade(),Gerssicleiton.getScienceGrade());
        
        Thiago.print();
        Thiago.print(Thiago.getEnglisGrade(),Thiago.getMathGrade(),Thiago.getScienceGrade());
        
        Camila.print();
        Camila.print(Camila.getEnglisGrade(),Camila.getMathGrade(),Camila.getScienceGrade());
        Aline.print();
        Aline.print(Aline.getEnglisGrade(),Aline.getMathGrade(),Aline.getScienceGrade());
        Felipe.print();
        Felipe.print(Felipe.getEnglisGrade(),Felipe.getMathGrade(),Felipe.getScienceGrade());
        Jayde.print();
        Jayde.print(Jayde.getEnglisGrade(),Jayde.getMathGrade(),Jayde.getScienceGrade());
        Joan.print();
        Joan.print(Joan.getEnglisGrade(),Joan.getMathGrade(),Joan.getScienceGrade());
        
        System.out.println(
          "Count = "+ StudentRecord.getStudentCount());
    }
}
