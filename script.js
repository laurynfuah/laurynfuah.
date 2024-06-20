{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('appointment-form').addEventListener('submit', function(event) \{\
    event.preventDefault(); // Emp\'eache l'envoi du formulaire\
\
    // R\'e9cup\'e8re les valeurs des champs du formulaire\
    const name = document.getElementById('name').value;\
    const email = document.getElementById('email').value;\
    const phone = document.getElementById('phone').value;\
    const date = document.getElementById('date').value;\
    const time = document.getElementById('time').value;\
\
    // Affiche un message de confirmation\
    document.getElementById('confirmation').innerText = `Merci $\{name\}, votre rendez-vous est confirm\'e9 pour le $\{date\} \'e0 $\{time\}.`;\
\
    // R\'e9initialise le formulaire\
    document.getElementById('appointment-form').reset();\
\});\
}