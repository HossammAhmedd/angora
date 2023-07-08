
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'You asked god for strength, so he gave you difficulties to make you stronger.'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'If you have The courage to start, and the discipline to endure, success is only a matter of time'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'Close the window that hurt you, no matter how beautiful the view is'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'Worrying doesnt take away tomorrows troubles, it takes away todays peace'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'Every step you take, every challenge you face, molds you into the person you are meant to become. Embrace the journey and let it shape your soul'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'When the devil keep asking you to look in the past , there is something in the future he doesnt want you to see'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'Strength is the only thing that matters in this world'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'Every man has two lives, and the second starts when he realises he has just one'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'No tree can grow to heaven unless its roots Reach down to hell'
    },
    {'author': 'Hossam Ahmed', 
     'quote': 'Hurting someone feeling is as easy as throwing a rock in the ocean, But you never know how deep that rock goes'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}