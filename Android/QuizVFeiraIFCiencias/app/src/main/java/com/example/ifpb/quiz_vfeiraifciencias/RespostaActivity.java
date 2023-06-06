package com.example.ifpb.quiz_vfeiraifciencias;


import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

public class RespostaActivity extends AppCompatActivity{

    private TextView pergunta;
    private RadioButton alternativa1, alternativa2, alternativa3;
    private RadioGroup respostas;
    private String certa;
    private boolean acertou = false, respondeu = false;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.questao);

        pergunta = (TextView) findViewById(R.id.pergunta);

        alternativa1 = (RadioButton) findViewById(R.id.alternativa_1);
        alternativa2 = (RadioButton) findViewById(R.id.alternativa_2);
        alternativa3 = (RadioButton) findViewById(R.id.alternativa_3);

        respostas = (RadioGroup) findViewById(R.id.alternativas) ;

        Intent intent = getIntent();

        pergunta.setText(intent.getStringExtra("pergunta"));

        certa = intent.getStringExtra("certa");

        if(intent.getBooleanExtra("respondida", false)){
            respondeu = true;
        }

        alternativa1.setText(intent.getStringExtra("alternativa1"));
        alternativa2.setText(intent.getStringExtra("alternativa2"));
        alternativa3.setText(intent.getStringExtra("alternativa3"));

    }

    public void responder(View v){
        Intent intent = new Intent();
        if(findViewById(respostas.getCheckedRadioButtonId()) != null){
            if(!respondeu){
                RadioButton rb = (RadioButton) findViewById(respostas.getCheckedRadioButtonId());
                if(rb.getText().equals(certa)){
                    acertou = true;
                }
                intent.putExtra("respondeu", true);
            }else{
                intent.putExtra("respondeu", false);
            }
        }
        intent.putExtra("Acertou", acertou);

        setResult(RESULT_OK, intent);
        finish();
    }
}
