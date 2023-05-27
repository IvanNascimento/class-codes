package com.example.aluno.exemplo2;

import android.content.Context;
import android.support.annotation.LayoutRes;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.List;

/**
 * Created by aluno on 06/11/2017.
 */

public class TarefasAdapter extends ArrayAdapter<Tarefa> {

    public TarefasAdapter(@NonNull Context context, @LayoutRes int resource, @NonNull List<Tarefa> objects) {
        super(context, resource, objects);
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        Tarefa tarefa = getItem(position);

        if(convertView == null){
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.linha, parent, false);
        }

        TextView titulo = (TextView) convertView.findViewById(R.id.titulo);
        TextView descricao = (TextView) convertView.findViewById(R.id.descricao);

        titulo.setText(tarefa.getTitulo());
        descricao.setText(tarefa.getDescricao());

        return convertView;
    }
}
