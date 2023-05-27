package com.example.aluno.exemplo2;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    private int clickedItemId= -1;
    private ListView lista;
    final int EDIT_TASK = 1;

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if(id == R.id.criar_nova){
            Toast.makeText(this, "Adicionar nova tarefa", Toast.LENGTH_LONG).show();
        } else if(id == R.id.do_request){
            final Context context = this;
            RequestQueue queue = Volley.newRequestQueue(context);
            String url ="http://antoniodias.me/data";

            JsonObjectRequest jsObjRequest = new JsonObjectRequest
                    (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

                        @Override
                        public void onResponse(JSONObject response) {
                            try {
                                Toast.makeText(context, response.getString("data"), Toast.LENGTH_LONG).show();
                            } catch (JSONException e) {
                                Toast.makeText(context, "Erro ao ler JSON.", Toast.LENGTH_LONG).show();
                                Log.e("ProgCorp", e.getMessage());
                            }
                        }
                    }, new Response.ErrorListener() {

                        @Override
                        public void onErrorResponse(VolleyError error) {
                            Toast.makeText(context, "Deu erro!", Toast.LENGTH_LONG).show();
                            Log.e("ProgCorp", error.getMessage());
                        }
                    });

            queue.add(jsObjRequest);
        }

        return super.onOptionsItemSelected(item);
    }

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
                Intent intent = new Intent(context, com.example.aluno.exemplo2.EditActivity.class);

                intent.putExtra("titulo", tarefa.getTitulo());
                intent.putExtra("descricao", tarefa.getDescricao());
                startActivityForResult(intent, EDIT_TASK);
            }

        });
        lista.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener(){
            @Override
            public boolean onItemLongClick(AdapterView<?> adapterView, View view, int i , long l){
                ArrayAdapter adapter =(ArrayAdapter)adapterView.getAdapter();
                Tarefa t = (Tarefa) adapter.getItem(i);
                createDialog(i).show();
                return true;
            }

        });

        ArrayList<Tarefa> tarefas = new ArrayList<>();

        TarefasAdapter adapter =
                new TarefasAdapter(this, R.layout.linha, tarefas);
        lista.setAdapter(adapter);

    }

    private void carregarTarefas(){
        String url ="http://10.5.50.254:8080/data";
        JsonArrayRequest req = new JsonArrayRequest(Request.Method.GET, url, null, new Response.Listener<JSONArray>() {
            @Override
            public void onResponse(JSONArray response) {
                ArrayAdapter adapter = (ArrayAdapter) lista.getAdapter();
                for (int i = 0; i < response.length(); i++){
                    try {
                        JSONObject obj = response.getJSONObject(i);
                        Tarefa t = new Tarefa(obj.getString("titulo"),
                                obj.getString("desc"));

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {

            }
        });
    }

    private Dialog createDialog(final int i) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setMessage("Deseja apagar")
                .setPositiveButton("Sim", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id){
                        ArrayAdapter adapter = (ArrayAdapter)lista.getAdapter();
                        Tarefa t = (Tarefa) adapter.getItem(i);
                        adapter.remove(t);
                    }
                })
                .setNegativeButton("Não", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id){

                    }
                });
        return builder.create();
    }
        protected void onActivityResult( int requestCode, int  resultCode, Intent data) {
            if (requestCode == EDIT_TASK) {
                if(resultCode==RESULT_OK){
                    ArrayAdapter adapter=(ArrayAdapter)lista.getAdapter();
                    Tarefa t = (Tarefa)adapter.getItem(clickedItemId);
                    t.setDescricao(data.getStringExtra("descricao"));
                    t.setTitulo(data.getStringExtra("titulo"));
                    adapter.notifyDataSetChanged();
                }
            }

        }
        @Override
        public boolean onCreateOptionsMenu(Menu menu){
            MenuInflater inflater = getMenuInflater();
            inflater.inflate(R.menu.activity_main, menu);

            return true;
        }
    }

