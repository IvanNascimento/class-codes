package me.antoniodias.progcorp;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

import static android.R.attr.data;

public class MainActivity extends AppCompatActivity {
    private int clickedItemId= -1;
    private ListView lista;
    final int EDIT_TASK = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         lista = (ListView) findViewById(R.id.lista);
        final Context context = this;


        lista.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View viw,int i, long l){
                clickedItemId= i;
                Tarefa tarefa = (Tarefa) adapterView.getItemAtPosition(i);
                Intent intent = new Intent(context, Edition_Activity.class);

                intent.putExtra("titulo", tarefa.getTitulo());
                intent.putExtra("descricao", tarefa.getDescricao());
                startActivityForResult(intent, EDIT_TASK);
            }

        });
    lista.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener(){
        @Override
        public boolean onItemLongClick(AdapterView<?> adapterView, View view, int i , long l){
            ArrayAdapter adapter =(ArrayAdapter)adapterView.getAdapter();
            Tarefa t=(Tarefa) adapter.getItem(i);
            adapter.remove(t);
            createDialog(i).show();
            return true;
        }

    });

        ArrayList<Tarefa> tarefas = new ArrayList<>();

        tarefas.add(new Tarefa("Importante", "Fazer tarefa de PC"));
        tarefas.add(new Tarefa("Importante 2", "Lembrar de fazer tarefa 1"));
        tarefas.add(new Tarefa("Importante 3", "Você lembrou da tarefa 2?"));

        TarefasAdapter adapter =
                new TarefasAdapter(this, R.layout.linha, tarefas);
        lista.setAdapter(adapter);

    }
    private Dialog createDialog(final int i){
        AlertDialog.Builder builder=new AlertDialog.Builder(this);
        builder.setMessage("Deseja apagar")
                .setPositiveButton("Sim",new DialogInterface.OnClickListener(){
                    @Override
                    public void onClick(DialogInterface dialog, int which) {

                    }

                    public void  onClicker(DialogInterface dialog, int id){
                    ArrayAdapter adapter=(ArrayAdapter)lista.getAdapter();
                    Tarefa t=(Tarefa)adapter.getItem(i);
                    adapter.remove(t);
                }
        })
        .setNegativeButton("Não",new DialogInterface.OnClickListener(){
            @Override
            public void onClick(DialogInterface dialog, int which) {

            }

            public void  onClicker(DialogInterface dialog, int id){

        }
    });
    @Override
    protected void onActivityResult( int requestCode, int  resultCode, Intent data) {
        if (requestCode == EDIT_TASK) {
            if(resultCode==RESULT_OK){
        Tarefa tarefa =new Tarefa(data.getStringExtra("titulo");
                data.getStringExtra("descicao");
                ArrayAdapter adapter=(ArrayAdapter)lista.getAdapter();
                Tarefa t=(Tarefa)adapter.getItem(clickedItemId);
                t.setDescricao(data.getStringExtra("descricao"));
                t.setTitulo(data.getStringExtra("titulo"));
                adapter.notifyDataSetChanged();
            }
        }

    }
        }

