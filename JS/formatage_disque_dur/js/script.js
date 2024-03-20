function openfilleFormatageMethod() {
    function format_windows_xp() {
        alert("Formatage du disque dur sur Windows XP en cours...");
        setTimeout(function () {
            alert("Le disque dur a été formaté avec succès sur Windows XP!");
        }, 3000);
    }

    function format_windows_7() {
        console.log("Formatage du disque dur sur Windows 7 en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Windows 7!");
        }, 3000);
    }

    function format_windows_8() {
        console.log("Formatage du disque dur sur Windows 8 en cours...");
        setTimeout(function () {
            alert("Le disque dur a été formaté avec succès sur Windows 8!");
        }, 3000);
    }

    function format_windows_10() {
        console.log("Formatage du disque dur sur Windows 10 en cours...");
        setTimeout(function () {
            alert("Le disque dur a été formaté avec succès sur Windows 10!");
        }, 3000);
    }

    function format_windows_11() {
        console.log("Formatage du disque dur sur Windows 11 en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Windows 11!");
        }, 3000);
    }

    function format_windows_12() {
        console.log("Formatage du disque dur sur Windows 12 en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Windows 12!");
        }, 3000);
    }

    function format_mac_osx() {
        console.log("Formatage du disque dur sur Mac OSX en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Mac OSX!");
        }, 3000);
    }

    function format_centos() {
        console.log("Formatage du disque dur sur CentOS en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur CentOS!");
        }, 3000);
    }

    function format_kubernetes() {
        console.log("Formatage du disque dur sur Kubernetes en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Kubernetes!");
        }, 3000);
    }

    function format_opnsense() {
        console.log("Formatage du disque dur sur OPNsense en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur OPNsense!");
        }, 3000);
    }

    function format_ubuntu() {
        console.log("Formatage du disque dur sur Ubuntu en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Ubuntu!");
        }, 3000);
    }

    function format_ubuntu_server() {
        console.log("Formatage du disque dur sur Ubuntu Server en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Ubuntu Server!");
        }, 3000);
    }

    function format_debian() {
        console.log("Formatage du disque dur sur Debian en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Debian!");
        }, 3000);
    }

    function format_fedora() {
        console.log("Formatage du disque dur sur Fedora en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Fedora!");
        }, 3000);
    }

    function format_raspberry_pi() {
        console.log("Formatage du disque dur sur Raspberry Pi en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Raspberry Pi!");
        }, 3000);
    }

    function format_kali() {
        console.log("Formatage du disque dur sur Kali en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Kali!");
        }, 3000);
    }

    function format_arduino() {
        console.log("Formatage du disque dur sur Arduino en cours...");
        setTimeout(function () {
            console.log("Le disque dur a été formaté avec succès sur Arduino!");
        }, 3000);
    }

    function menu_principal() {
        while (true) {
            console.log("\n------ MENU PRINCIPAL ------");
            console.log("1. Formatage du disque dur sur Windows XP");
            console.log("2. Formatage du disque dur sur Windows 7");
            console.log("3. Formatage du disque dur sur Windows 8");
            console.log("4. Formatage du disque dur sur Windows 10");
            console.log("5. Formatage du disque dur sur Windows 11");
            console.log("6. Formatage du disque dur sur Windows 12");
            console.log("7. Formatage du disque dur sur Mac OSX");
            console.log("8. Formatage du disque dur sur CentOS");
            console.log("9. Formatage du disque dur sur Kubernetes");
            console.log("10. Formatage du disque dur sur OPNsense");
            console.log("11. Formatage du disque dur sur Ubuntu");
            console.log("12. Formatage du disque dur sur Ubuntu Server");
            console.log("13. Formatage du disque dur sur Debian");
            console.log("14. Formatage du disque dur sur Fedora");
            console.log("15. Formatage du disque dur sur Raspberry Pi");
            console.log("16. Formatage du disque dur sur Kali");
            console.log("17. Formatage du disque dur sur Arduino");
            console.log("0. Quitter");

            let choix = prompt("Sélectionnez une option : ");

            if (choix === "0") {
                console.log("Au revoir!");
                break;
            } else if (choix === "1") {
                format_windows_xp();
            } else if (choix === "2") {
                format_windows_7();
            } else if (choix === "3") {
                format_windows_8();
            } else if (choix === "4") {
                format_windows_10();
            } else if (choix === "5") {
                format_windows_11();
            } else if (choix === "6") {
                format_windows_12();
            } else if (choix === "7") {
                format_mac_osx();
            } else if (choix === "8") {
                format_centos();
            } else if (choix === "9") {
                format_kubernetes();
            } else if (choix === "10") {
                format_opnsense();
            } else if (choix === "11") {
                format_ubuntu();
            } else if (choix === "12") {
                format_ubuntu_server();
            } else if (choix === "13") {
                format_debian();
            } else if (choix === "14") {
                format_fedora();
            } else if (choix === "15") {
                format_raspberry_pi();
            } else if (choix === "16") {
                format_kali();
            } else if (choix === "17") {
                format_arduino();
            } else {
                console.log("Option invalide. Veuillez sélectionner une option valide.");
            }
        }
    }

    menu_principal();
}
