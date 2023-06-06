package com.example.ifpb.quiz_vfeiraifciencias;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Random;

public class MainActivity extends AppCompatActivity {


    ListView lista;
    private int clickedItemId= -1;
    private final int RES = 1;
    int pontos = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        lista = (ListView) findViewById(R.id.lista);
        final Context context = this;

        lista.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                clickedItemId = i;
                Questao questao = (Questao) adapterView.getItemAtPosition(i);
                Intent intent = new Intent(context, RespostaActivity.class);

                intent.putExtra("certa", questao.getCerta());

                intent.putExtra("pergunta", questao.getQuestao());
                intent.putExtra("respondida", questao.isRespondida());

                intent.putExtra("alternativa1", questao.getAlternativa1());
                intent.putExtra("alternativa2", questao.getAlternativa2());
                intent.putExtra("alternativa3", questao.getAlternativa3());

                startActivityForResult(intent, RES);
            }
        });

       ArrayList<Questao> questoes = new ArrayList<>();

        questoes.add(new Questao("Em que anos foi criado o texto da Declaração Universal dos Direitos Humanos?",
                "1914","1948","1980", "1948"));
        questoes.add(new Questao("Qual experiência traumática inspirou a elaboração da Declaração dos Direitos Humanos?",
                "Primeira Guerra Mundial","Segunda Guerra Mundial","Guerra Fria","Segunda Guerra Mundial"));
        questoes.add(new Questao("Quantos artigos compõem a DUDH?",
                "15","30","50","30"));
        questoes.add(new Questao("Qual das alternativas representa o 1° Artigo do DUDH?",
                "Todos temos direitos a organização popular, social e política.","Todos nascemos livres e somos iguais em direito e dignidade.",
                "Todos temos o dever de lutar pela conquista e ampliação desses direitos.","Todos nascemos livres e somos iguais em direito e dignidade."));
        questoes.add(new Questao("Qual instituição criou a DUDH?",
                "UNESCO","UNICEF","ONU","ONU"));
        questoes.add(new Questao("Qual país foi expulso da ONU em 2011 por ter promovido uma dura repressão aos protestos populares contra o regime ditatorial dessa nação?",
                "Coreia do Norte","África do Sul","Líbia","Líbia"));
        questoes.add(new Questao("Que mulher esteve à frente na promoção da DUDH?",
                "Eleonor Roosevelt","Jane addams","Marie Curie","Eleonor Roosevelt"));
        questoes.add(new Questao("Que período histórico do Brasil em que muitos dos Direitos Humanos foram infligidos?",
                "No Estado Novo","Na Ditadura Militar","República Velha","Na Ditadura Militar"));
        questoes.add(new Questao("A escravização moderna fere principalmente o artigo da DUDH:",
                "Todos temos direitos de não sofrer nenhum tipo de discriminação.","Todos temos direito ao descanso, ao laser e a escola.",
                "Todos temos direito ao trabalho livre e bem remunerado.","Todos temos direito ao trabalho livre e bem remunerado."));
        questoes.add(new Questao("Que ano terminou a Segunda Guerra Mundial?",
                "1945","1918","1939","1945"));
        questoes.add(new Questao("Qual povo foi levado em massa para os campos de concentração?",
                "Russos","Judeus","Eslavos","Judeus"));
        questoes.add(new Questao("O genocídio foi legitimado por questão de “inferioridade”:",
                "Da cultura","Da raça","Da Etnia","Da raça"));
        questoes.add(new Questao("Qual líder foi responsável pelo maior genocídio o corrido na Segunda Guerra Mundial?",
                "Joseph Stálin","Benito Mussolini","Adolf Hitler","Adolf Hitler"));
        questoes.add(new Questao("Como era nomeado o tratamento de tortura em que a pessoa ficava de cabeça para baixo e levando choque nas íntimas do prisioneiro?",
                "Pau de tucano","Pau de arara","Cadeira de dragão","Pau de arara"));
        questoes.add(new Questao("Quais direitos humanos foram violados com a repressão durante a Ditadura Civil-Militar?",
                "Liberdade de expressão; direito de ir e vir; direito a saúde, à assistência médica hospitalar.","Direito de organizar popular, sindical e política; Ninguém pode ser torturado ou linchado; ninguém pode ser arbitrariamente preso ou detido sem direito de defesa.",
                "Ninguém pode ser torturado ou linchado; ninguém pode ser arbitrariamente preso ou detido sem direito de defesa; direito à cidadania.","Direito de organizar popular, sindical e política; Ninguém pode ser torturado oulinchado; ninguém pode ser arbitrariamente preso ou detido sem direito de defesa."));
        questoes.add(new Questao("O ano de 1968 marcou a radicalização do repressão e da censura com a criação:",
                "Da lei de imprensa","Do Ato Institucional nº5 – AI","Da Ato Institucional nº1 – AI -1","Do Ato Institucional nº5 – AI"));
        questoes.add(new Questao("Quais artistas foram perseguidos no período da Ditadura Civil-Militar e tiveram seus direitos de livre expressão violados?",
                "Gal Costa, Raul Seixas e Nando Reis.","Caetano Veloso, Elis Regina e Chico Buarque.","Chico Buarque, Cazuza, Caetano Veloso.","Caetano Veloso, Elis Regina e Chico Buarque."));

        ArrayList<Questao> questoesSorteadas = new ArrayList<>();

        Random num = new Random();

        for(int i=0;i<10;i++){
            Questao q = (Questao) questoes.get(num.nextInt(questoes.size()));
            if(!questoesSorteadas.contains(q)){
                questoesSorteadas.add(q);
            }else{
                i--;
            }
        }

        QuestoesAdapter adapter =
                new QuestoesAdapter(this, R.layout.linha, questoesSorteadas);
        lista.setAdapter(adapter);

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int i = item.getItemId();

        if(i == R.id.pontos){
            Toast.makeText(this, "Pontuação: "+pontos, Toast.LENGTH_LONG).show();
        }else if(i == R.id.reset){
            Intent intent = getBaseContext().getPackageManager()
                    .getLaunchIntentForPackage( getBaseContext().getPackageName() );
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
            startActivity(intent);
        }

        return super.onOptionsItemSelected(item);
    }

    private Dialog createDialog(final int i){
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setMessage("Tem certeza")
                .setPositiveButton("Sim", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }

                })
                .setNegativeButton("Não", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }
                });
        return builder.create();
    };

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if(requestCode == RES){
            if(resultCode == RESULT_OK){
                ArrayAdapter adapter = (ArrayAdapter) lista.getAdapter();
                Questao q = (Questao) adapter.getItem(clickedItemId);
                if(data.getBooleanExtra("respondeu", false)){
                    q.setRespondida(true);
                }
                boolean acertou = data.getBooleanExtra("Acertou",false);
                if(acertou){
                    q.setAcertou(true);
                    pontos++;
                }
                adapter.notifyDataSetChanged();
            }
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.pontuacao, menu);

        return true;
    }
}
