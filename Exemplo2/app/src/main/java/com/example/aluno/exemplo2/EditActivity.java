package com.example.aluno.exemplo2;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.EditText;

public class EditActivity extends AppCompatActivity {
    private EditText titulo;
    private EditText descricao;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit);
        titulo = (EditText) findViewById(R.id.editTitulo);
        descricao = (EditText) findViewById(R.id.editDescricao);
        Intent intent=getIntent();

        titulo.setText(intent.getStringExtra("titulo"));
        descricao.setText(intent.getStringExtra("descricao"));
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater=getMenuInflater();
        inflater.inflate(R.menu.edit_menu,menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id ==R.id.confirmar){
            Intent intent =new Intent();
            intent.putExtra("titulo",titulo.getText().toString());
            intent.putExtra("descricao",descricao.getText().toString());
            setResult(RESULT_OK,intent);
            finish();
        }
        return super.onOptionsItemSelected(item);
    }
}
