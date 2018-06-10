import json 
import urllib
import requests
import time
import telebot
from threading import Thread
from dbhelper import DBHelper

db = DBHelper()
db.setup()

class User:
    def __init__(this, ID, name, Type, state = 'idle', substate = 'idle'):
        this.id = ID
        this.name = name
        this.type = Type
        this.state = state
        this.substate = substate
        this.last_check = time.time() + 10
        this.nusp = None
        this.notif = False
        this.major_id = -1

class Evaluation:
    def __init__(this, grade, comment, user_nusp):
        this.grade = grade
        this.comment = comment
        this.nusp = user_nusp
# , User(74119740, 'Rina', 'student', state='config')

class MajorEvaluation:
    def __init__(this, ID, user_nusp):
        this.id = ID
        this.nusp = user_nusp
        this.did = None
        this.pont = None
        this.coe = None
        this.ded = None
        this.stud = None
        this.comm = None

# , User(74119740, 'Rina', 'student', state='config')
users = [User(88938021, 'Rafael', 'student', state='config')]
evals = []
majors = []
major_eval = False
major_time = time.time()


def findUser(message):
    #note: make this less garbage
    for user in users:
        if user.id == message.chat.id:
            return user
    return None


# chat main state
# 'idle': chat is waiting for messages
# 'minorEval': chat is in a minor evaluation of classes
# 'princEval'; chat is in a major evaluation of classes
# 'config': chat is in configuration mode

# substate of main chat state
# nusp: waiting for user nusp
# notif_check: waiting for notification check info
# tenGrade: chat is waiting for a 0-10 grade of class

## global config
TOKEN = "433393733:AAHpM9DyRgTUp1UtNaM5ApO2TuvFQHzYMcE"
bot = telebot.TeleBot(TOKEN)


def checkForUserState(message):
    user = findUser(message)
    if user:
       return user.state

def getMajorbyId(ID):
    for major in majors:
        if major.id == ID:
            return major
    return None


def affirmative(string):
    low = string.lower().strip()
    if low == 'sim' or low == 'quero' or low == 'pode ser' or low == 's' or low == 'y' or low == 'yep' or low == 'si' or low == 'simm' or low == 'pode':
        return True
    else:
        return False


#################
# start method  #
#################
@bot.message_handler(commands=['start'])
def start_handler(message):
    users.append(User(message.chat.id,'Unknown','student',state='config'))


#################
# config dialog #
#################
@bot.message_handler(func=lambda message: checkForUserState(message) == 'config')
def config_handler(message):
    user = findUser(message)
    if user.substate == 'nusp':
        user.nusp = message.text;
        bot.send_message(user.id, 'Olá ' + user.name + '!')
        user.substate = 'notif_check'
    elif user.substate == 'notif_ans':
        if(affirmative(message.text)):
            bot.send_message(user.id, "ok, se precisar de mim é só chamar!")
            user.notif = True
        else:
            bot.send_message(user.id, "ok, não vou te incomodar com isso.")
            user.notif = False
        user.state = 'idle'
        user.substate = 'idle'


####################
# minorEval dialog #
####################
@bot.message_handler(func=lambda message: checkForUserState(message) == 'minorEval')
def minor_handler(message):
    user = findUser(message)
    if user.substate == 'tenGrade':
        if(int(message.text) < 0 or int(message.text) > 10):
            bot.send_message(user.id,'Por favor, responda numa escala de 0 a 10.')
        else:
            #create new eval object
            my_eval = Evaluation(int(message.text),None,user.nusp)
            evals.append(my_eval)
            bot.send_message(user.id,'Ok, sua avaliação foi recebida. Obrigado!')
            print('Evaluation: grade {0} by {1}'.format(my_eval.grade, my_eval.nusp))
            user.state = 'idle'
            user.substate = 'idle'
            user.last_check = time.time()

####################
# majorEval dialog #
####################
@bot.message_handler(func=lambda message: checkForUserState(message) == 'majorEval')
def major_handler(message):
    user = findUser(message)
    if user.substate == 'confirmation':
        if(affirmative(message.text)):
            bot.send_message(user.id,'Ok, vou te fazer algumas perguntas. Responda em uma escala de 0 a 10, sendo 0 péssimo e 10 ótimo')
            user.major_id += 1
            user.substate = 'didatica'
        else:
            bot.send_message(user.id,'Ok, não vou te incomodar com isso.')
            user.state = 'idle'
            user.substate = 'idle'

    elif user.substate == 'didatica_conf':
        if(int(message.text) < 0 or int(message.text) > 10):
            bot.send_message(user.id,'Por favor, responda numa escala de 0 a 10.')
        else:
            #create new eval object
            majors.append(MajorEvaluation(user.major_id, user.nusp))
            major = getMajorbyId(user.major_id)
            major.did = int(message.text)
            user.substate = 'pontualidade'

    elif user.substate == 'pontualidade_conf':
        if(int(message.text) < 0 or int(message.text) > 10):
            bot.send_message(user.id,'Por favor, responda numa escala de 0 a 10.')
        else:
            major = getMajorbyId(user.major_id)
            major.pont = int(message.text)
            user.substate = 'dedicacao'

    elif user.substate == 'dedicacao_conf':
        if(int(message.text) < 0 or int(message.text) > 10):
            bot.send_message(user.id,'Por favor, responda numa escala de 0 a 10.')
        else:
            major = getMajorbyId(user.major_id)
            major.ded = int(message.text)
            user.substate = 'relacao'

    elif user.substate == 'relacao_conf':
        if(int(message.text) < 0 or int(message.text) > 10):
            bot.send_message(user.id,'Por favor, responda numa escala de 0 a 10.')
        else:
            major = getMajorbyId(user.major_id)
            major.stud = int(message.text)
            user.substate = 'comentarios'

    elif user.substate == 'comentarios_conf':
        major = getMajorbyId(user.major_id)
        major.comm = message.text
        bot.send_message(user.id, 'Ok, sua avaliação foi recebida. Obrigado!')
        major_time = time.time()
        user.substate = 'idle'
        user.state = 'endless'


def main():
    thread = Thread(target=bot.polling,args=())
    thread.daemon = True
    thread.start()
    # bot.polling()

    while True:
        time.sleep(0.2)
        # checks each user state and responds to it
        for user in users:

            if user.state == 'idle':
                print(time.time())
                print(major_time)
                if(time.time() - major_time > 50):
                    user.state = 'majorEval'
                    user.substate = 'idle'
                elif(False):
                    elapsed = time.time() - user.last_check
                    if elapsed > 10:
                        user.state = 'minorEval'

            elif user.state == 'config':
                #1st substate: send message for usp id
                if(user.substate == 'idle'):
                    bot.send_message(user.id, "Olá, eu sou o Stu. Estou aqui para te ajudar na comunicação com a USP")
                    bot.send_message(user.id, "Pra gente começar a conversar, vou precisar do seu número USP. Você pode me informar o seu número USP?")
                    user.substate = 'nusp'

                elif(user.substate == 'notif_check'):
                    bot.send_message(user.id, "Perfeito!")
                    bot.send_message(user.id, "Soube que você está cadastrado nessas disciplinas:")
                    bot.send_message(user.id, "SEL0628 - Sistemas Digitais, com o professor João das Neves.")
                    bot.send_message(user.id, "Posso pedir sua opinião sobre as aulas durante a semana?")
                    user.substate = 'notif_ans'

            elif user.state == 'minorEval':
                if user.substate == 'idle':
                    bot.send_message(user.id, "Vi que sua aula de Sistemas Digitais terminou")
                    bot.send_message(user.id, "Em uma escala de 0 a 10, como você avalia essa aula?")
                    bot.send_message(user.id, "0 significa péssimo, 10 significa ótimo")
                    user.substate = 'tenGrade'

            elif user.state == 'majorEval':
                if user.substate == 'idle':
                    bot.send_message(user.id, "Olá, você pode fazer uma avaliação sobre o seu semestre com o professor João das Neves?")
                    user.substate = 'confirmation'

                if user.substate == 'didatica':
                    bot.send_message(user.id, "Como você avaliaria a didática das aulas?")
                    user.substate = 'didatica_conf'

                if user.substate == 'pontualidade':
                    bot.send_message(user.id, "Como você avaliaria a pontualidade dele nas aulas?")
                    user.substate = 'pontualidade_conf'

                if user.substate == 'coerencia':
                    bot.send_message(user.id, "Você considera as provas coerentes com o conteúdo visto em aula?")
                    user.substate = 'coerencia_conf'

                if user.substate == 'dedicacao':
                    bot.send_message(user.id, "Quanta dedicação a disciplina exigiu de você?")
                    user.substate = 'dedicacao_conf'

                if user.substate == 'relacao':
                    bot.send_message(user.id, "A relação do professor com os alunos (e vice versa) era boa?")
                    user.substate = 'relacao_conf'

                if user.substate == 'comentarios':
                    bot.send_message(user.id, "Se tiver algo a mais para comentar sobre a disciplina, pode comentar aqui.")
                    user.substate = 'comentarios_conf'


if __name__ == '__main__':
    main()