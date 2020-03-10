function losulosu() {
    var questions = [
        "1. Dlaczego włączamy flagę ip_forward (przekierowanie ruchu) podczas ataku MitM?",
        "2. Do jakiego rodzaju monitorowania wykorzystywany jest program NMAP?",
        "3. Jakiego filtra użyjemy do wyświetlenia pakietów UDP na porcie 17 pochodzących z adresu 172.31.255.255?",
        "4. Jakiego filtra użyjemy do wyświetlenia żądania HTTP kierowanych na adres 10.0.52.37?",
        "5. Jakiego filtra użyjemy do wyświetlenia pakietów nie ARP i nie DNS o adresie MAC ff:ff:ff:ff:ff:ff?",
        "6. Jakiego filtra użyjemy do wyświetlenia pakietów SMTP, które zawierają treść “Subject:”?",
        "7. Na czym polega atak typu arp-spoofing?",
        "9. Do czego służy narzędzie Wireshark?",
        "10. Do czego służy narzędzie PackETH?",
        "11. Do czego służy narzędzie Driftnet?",
        "12. Czym różni się program Wireshark od TcpDump?",
        "13. Na czym polega sniffing pasywny?",
        "14. Na czym polega sniffing aktywny?",
        "15. Do czego służy narzędzie Arpspoof?",
        "16. Na czym polega atak typu Man-in-the-Middle?",
        "17. Do czego może zostać wykorzystane podsłuchiwanie przez hakera?"
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
