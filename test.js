function losulosu() {
    var questions = [
        "1. Dlaczego włączamy flagę ip_forward (przekierowanie ruchu) podczas ataku MitM?",
        "2. Do jakiego rodzaju monitorowania wykorzystywany jest program Wireshark?",
        "3. Jakiego filtra użyjemy do wyświetlenia pakietów TCP na porcie 53 pochodzących z adresu 192.168.1.1?",
        "4. Jakie filtra użyjemy do wyświetlenia pakietów HTTP kierowanych na adres 127.0.0.1?",
        "5. Na czym polega sniffing pasywny?",
        "6. Na czym polega sniffing aktywny?",
        "7. Na czym polega atak typu arp-spoofing?",
        "8. Zaleta podsłuchiwania (administrator)?",
        "9. Do czego służy narzędzie Wireshark?",
        "10. Do czego służy narzędzie PackETH?",
        "11. Do czego służy narzędzie Netstat?",
        "12. Do czego służy narzędzie TcpDump?",
        "13. Do czego służy narzędzie Nmap?",
        "14. Do czego służy narzędzie Arpspoof?"
    ];

    var result = [];
    var indices = [];

    for (var i = 0; i < 4; i++) {
        do {
            var r = Math.round(Math.random() * (questions.length - 1));
        }
        while (indices.includes(r));
        indices.push(r);
        var question = "<p>" + questions[r] + "</p>";
        result.push(question);
    }

    return result;
}