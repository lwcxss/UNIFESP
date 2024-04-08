#include <iostream>
#include <string>

using namespace std;

// Interface INotificador
class INotificador {
public:
    virtual void enviar(const string& mensagem, const string& destinatario) = 0;
};

// Implementação concreta para enviar e-mails
class NotificadorEmail : public INotificador {
public:
    void enviar(const string& mensagem, const string& destinatario) override {
        cout << "Enviando e-mail para " << destinatario << ": " << mensagem << endl;
    }
};

// Adaptador para enviar SMS
class AdaptadorSMS : public INotificador {
public:
    void enviar(const string& mensagem, const string& destinatario) override {
        enviarSMS(destinatario, mensagem);
    }

private:
    // Simula o envio de um SMS
    void enviarSMS(const string& numero, const string& mensagem) {
        cout << "Enviando SMS para " << numero << ": " << mensagem << endl;
    }
};

// Adaptador para enviar notificações push
class AdaptadorPush : public INotificador {
public:
    void enviar(const string& mensagem, const string& destinatario) override {
        enviarPush(destinatario, mensagem);
    }

private:
    // Simula o envio de uma notificação push
    void enviarPush(const string& idDispositivo, const string& mensagem) {
        cout << "Enviando Push para dispositivo " << idDispositivo << ": " << mensagem << endl;
    }
};

// Demonstração do uso dos notificadores
int main(int argc, char** argv) {
    NotificadorEmail notificadorEmail;
    AdaptadorSMS adaptadorSMS;
    AdaptadorPush adaptadorPush;

    notificadorEmail.enviar("Olá, este é um e-mail de teste!", "email@destino.com");
    adaptadorSMS.enviar("Olá, este é um SMS de teste!", "123456789");
    adaptadorPush.enviar("Olá, esta é uma notificação push de teste!", "device123");

    return 0;
}
