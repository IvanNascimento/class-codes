package com.example.ifpb.quiz_vfeiraifciencias;


import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.List;

public class QuestoesAdapter extends ArrayAdapter {
    public QuestoesAdapter(Context context, int resource, List<Questao> objects) {
        super(context, resource, objects);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        Questao questao = (Questao) getItem(position);

        if (convertView == null) {
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.linha, parent, false);
        }

        TextView pergunta = (TextView) convertView.findViewById(R.id.questao);
        TextView status = (TextView) convertView.findViewById(R.id.status);

        pergunta.setText(questao.getQuestao());
        status.setText(questao.toString());

        return convertView;
    }
}
