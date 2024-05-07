import React from 'react';

const Faq = () => {
  return (
    <>
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Häufig gestellte Fragen</h1>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">1. Wie kann ich ein Konto eröffnen?</h2>
        <p>Sie können ein Konto direkt über unsere App eröffnen. Gehen Sie einfach zur Registerkarte "Konto eröffnen" und folgen Sie den Anweisungen.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">2. Wie kann ich Geld überweisen?</h2>
        <p>Um Geld zu überweisen, navigieren Sie zur Registerkarte "Überweisungen", geben Sie die Empfängerdaten ein und wählen Sie den Betrag aus, den Sie überweisen möchten.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">3. Ist meine Geldüberweisung sicher?</h2>
        <p>Ja, wir verwenden branchenführende Sicherheitstechnologien, um sicherzustellen, dass Ihre Überweisungen sicher und geschützt sind.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">4. Wie kann ich meinen Kontostand überprüfen?</h2>
        <p>Sie können Ihren Kontostand jederzeit über die Registerkarte "Kontostand" in der App überprüfen.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">5. Was mache ich, wenn ich mein Passwort vergessen habe?</h2>
        <p>Wenn Sie Ihr Passwort vergessen haben, können Sie auf "Passwort vergessen" auf der Anmeldeseite klicken und den Anweisungen folgen, um Ihr Passwort zurückzusetzen.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">6. Wie kann ich den Kundenservice kontaktieren?</h2>
        <p>Sie können unseren Kundenservice rund um die Uhr per Telefon unter der Nummer XXX-XXX-XXXX oder per E-Mail unter support@bankapp.com erreichen.</p>
      </div>
    </div>
    </>
  );
};

export default Faq;
