const express = require('express');
const app = express();
const port = 3000;

const medicamentos = [
    {
      "doenca": "Hipertensão",
      "sintomas": ["Dor de cabeça", "Tontura", "Falta de ar", "Visão turva", "Dor no peito"]
    },
    {
      "doenca": "Diabetes Tipo 2",
      "sintomas": ["Sede excessiva", "Fome constante", "Cansaço", "Visão embaçada", "Cicatrização lenta"]
    },
    {
      "doenca": "Infarto do Miocárdio",
      "sintomas": ["Dor no peito", "Falta de ar", "Náuseas", "Suor excessivo", "Dor no braço esquerdo"]
    },
    {
      "doenca": "Acidente Vascular Cerebral (AVC)",
      "sintomas": ["Fraqueza ou dormência em um lado do corpo", "Dificuldade de fala", "Perda de visão", "Dificuldade para caminhar", "Tontura"]
    },
    {
      "doenca": "Câncer de Mama",
      "sintomas": ["Carne dura na mama", "Alterações na pele da mama", "Dor na mama", "Mudanças no formato ou tamanho da mama"]
    },
    {
      "doenca": "Câncer de Próstata",
      "sintomas": ["Dificuldade para urinar", "Dor ao urinar", "Sangue na urina", "Dor nas costas", "Perda de peso inexplicada"]
    },
    {
      "doenca": "Câncer de Pulmão",
      "sintomas": ["Tosse persistente", "Falta de ar", "Dor no peito", "Perda de peso", "Cansaço extremo"]
    },
    {
      "doenca": "Câncer de Colo do Útero",
      "sintomas": ["Sangramento vaginal anormal", "Dor durante a relação sexual", "Dor pélvica", "Secreção vaginal incomum"]
    },
    {
      "doenca": "Dengue",
      "sintomas": ["Febre alta", "Dor de cabeça intensa", "Dor atrás dos olhos", "Dores musculares e articulares", "Erupção cutânea"]
    },
    {
      "doenca": "Zika",
      "sintomas": ["Febre baixa", "Rash cutâneo", "Dores nas articulações", "Dor de cabeça", "Conjuntivite"]
    },
    {
      "doenca": "Chikungunya",
      "sintomas": ["Febre", "Dor nas articulações", "Dor muscular", "Erupção cutânea", "Cansaço extremo"]
    },
    {
      "doenca": "Tuberculose",
      "sintomas": ["Tosse persistente", "Suores noturnos", "Perda de peso", "Falta de apetite", "Cansaço"]
    },
    {
      "doenca": "Hepatite Viral",
      "sintomas": ["Icterícia (amarelecimento da pele)", "Dor abdominal", "Cansaço", "Náuseas", "Urina escura"]
    },
    {
      "doenca": "Asma",
      "sintomas": ["Falta de ar", "Chiado no peito", "Tosse persistente", "Dificuldade para respirar", "Sensação de aperto no peito"]
    },
    {
      "doenca": "Bronquite Crônica",
      "sintomas": ["Tosse com muco", "Dificuldade para respirar", "Chiado no peito", "Cansaço", "Infecções respiratórias frequentes"]
    },
    {
      "doenca": "Insuficiência Renal",
      "sintomas": ["Inchaço nas pernas e tornozelos", "Fadiga", "Dificuldade para respirar", "Náuseas", "Perda de apetite"]
    },
    {
      "doenca": "Acidente de Trânsito",
      "sintomas": ["Fraturas", "Contusões", "Dor intensa", "Dificuldade para movimentar membros", "Sangramento"]
    },
    {
      "doenca": "Ansiedade",
      "sintomas": ["Preocupação excessiva", "Dificuldade para relaxar", "Fadiga", "Tensão muscular", "Irritabilidade"]
    },
    {
      "doenca": "Depressão",
      "sintomas": ["Tristeza constante", "Perda de interesse em atividades", "Fadiga", "Alterações no apetite", "Dificuldade para dormir"]
    },
    {
      "doenca": "Obesidade",
      "sintomas": ["Excesso de gordura corporal", "Fadiga", "Dificuldade para respirar", "Dor nas articulações", "Aumento da pressão arterial"]
    },
    {
      "doenca": "Gastrite",
      "sintomas": ["Dor ou queimação no estômago", "Náuseas", "Vômitos", "Perda de apetite", "Indigestão"]
    },
    {
      "doenca": "Acne",
      "sintomas": ["Espinhas", "Cravos", "Inflamação na pele", "Dor nas lesões", "Vermelhidão"]
    },
    {
      "doenca": "Rinite Alérgica",
      "sintomas": ["Nariz entupido", "Espirros", "Coceira nos olhos", "Coriza", "Tosse"]
    },
    {
      "doenca": "Sinusite",
      "sintomas": ["Dor facial", "Congestão nasal", "Dores de cabeça", "Secreção nasal espessa", "Falta de olfato"]
    },
    {
      "doenca": "Otite",
      "sintomas": ["Dor no ouvido", "Sensação de ouvido tapado", "Perda de audição", "Febre", "Secreção no ouvido"]
    },
    {
      "doenca": "Artrite Reumatoide",
      "sintomas": ["Dor nas articulações", "Inchaço nas articulações", "Dificuldade de movimento", "Fadiga", "Rigidez matinal"]
    },
    {
      "doenca": "Lúpus",
      "sintomas": ["Erupções cutâneas", "Fadiga", "Dor nas articulações", "Febre", "Perda de cabelo"]
    },
    {
      "doenca": "Psoríase",
      "sintomas": ["Manchas vermelhas na pele", "Descamação", "Coceira", "Rachaduras na pele", "Inflamação"]
    },
    {
      "doenca": "Fibromialgia",
      "sintomas": ["Dor muscular generalizada", "Cansaço", "Distúrbios do sono", "Problemas de memória", "Depressão"]
    },
    {
      "doenca": "Doença Arterial Periférica",
      "sintomas": ["Dor nas pernas ao caminhar", "Sensação de formigamento", "Pele fria nas extremidades", "Úlceras nos pés", "Cãibras"]
    },
    {
      "doenca": "Varizes",
      "sintomas": ["Veias inchadas e visíveis", "Dor nas pernas", "Sensação de peso nas pernas", "Inchaço", "Cãibras"]
    },
    {
      "doenca": "Tensão Muscular",
      "sintomas": ["Dor localizada", "Rigidez muscular", "Dificuldade de movimento", "Fadiga", "Inchaço"]
    },
    {
      "doenca": "Hérnia de Disco",
      "sintomas": ["Dor nas costas", "Dor irradiando para as pernas", "Formigamento", "Fraqueza nas pernas", "Dificuldade para caminhar"]
    },
    {
      "doenca": "Gripe",
      "sintomas": ["Febre", "Tosse", "Dor no corpo", "Dor de cabeça", "Congestão nasal"]
    },
    {
      "doenca": "Resfriado Comum",
      "sintomas": ["Coriza", "Espíritos", "Tosse", "Dor de garganta", "Febre baixa"]
    },
    {
      "doenca": "Cistite",
      "sintomas": ["Dor ao urinar", "Urgência urinária", "Urina turva", "Febre", "Sensação de bexiga cheia"]
    },
    {
      "doenca": "Endometriose",
      "sintomas": ["Dor intensa durante o período menstrual", "Dor pélvica crônica", "Infertilidade", "Dor durante a relação sexual"]
    },
    {
      "doenca": "Síndrome do Ovário Policístico",
      "sintomas": ["Irregularidade menstrual", "Crescimento excessivo de pelos", "Acne", "Infertilidade"]
    },
    {
      "doenca": "Urticária",
      "sintomas": ["Erupções vermelhas na pele", "Coceira intensa", "Inchaço", "Dor nas lesões", "Queimação"]
    },
    {
      "doenca": "Anemia Ferropriva",
      "sintomas": ["Fadiga", "Pele pálida", "Dificuldade para respirar", "Tontura", "Coração acelerado"]
    },
    {
      "doenca": "Hipotireoidismo",
      "sintomas": ["Cansaço", "Ganho de peso", "Sensibilidade ao frio", "Pele seca", "Depressão"]
    },
    {
      "doenca": "Hipertireoidismo",
      "sintomas": ["Perda de peso", "Aumento do apetite", "Tremores", "Suor excessivo", "Frequência cardíaca elevada"]
    },
    {
      "doenca": "Síndrome de Down",
      "sintomas": ["Atraso no desenvolvimento", "Características faciais distintas", "Problemas cardíacos", "Hipotonia muscular"]
    },
    {
      "doenca": "Doença de Parkinson",
      "sintomas": ["Tremores", "Rigidez muscular", "Dificuldade para caminhar", "Mudanças no comportamento", "Dificuldade de fala"]
    },
    {
      "doenca": "Esclerose Múltipla",
      "sintomas": ["Visão embaçada", "Fadiga", "Dificuldade de equilíbrio", "Dormência nas extremidades", "Problemas cognitivos"]
    },
    {
      "doenca": "Doença Celíaca",
      "sintomas": ["Diarreia crônica", "Perda de peso", "Cólica abdominal", "Náuseas", "Fadiga"]
    },
    {
      "doenca": "Artrite Psoriática",
      "sintomas": ["Dor nas articulações", "Inchaço nas articulações", "Erupções cutâneas", "Rigidez matinal", "Fadiga"]
    },
    {
      "doenca": "Doença de Alzheimer",
      "sintomas": ["Perda de memória", "Dificuldade de comunicação", "Alterações de humor", "Confusão", "Dificuldade para realizar atividades cotidianas"]
    },
    {
      "doenca": "Doença de Crohn",
      "sintomas": ["Diarreia crônica", "Dor abdominal", "Perda de apetite", "Perda de peso", "Sangramento retal"]
    },
    {
      "doenca": "Colite Ulcerativa",
      "sintomas": ["Diarreia com sangue", "Dor abdominal", "Febre", "Fadiga", "Perda de peso"]
    }
  ];

  
// Route to get the list of diseases and symptoms
app.get('/doencas', (req, res) => {
    res.json(medicamentos);
  });
  
  // Starting the server on the specified port
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
  
