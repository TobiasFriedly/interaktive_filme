# interaktive_filme


Bei diesem Projekt wollte ich meine Erfahrung mit Javascript, HTML und CSS einsetzen, um mich mit meinem Lehrprojekt auseinanderzusetzen, in welchem es um Interaktive Filme geht.

# Vorgehen

Nachdem ich eine Basic HTML Strucktur hatte, wollte ich etwas "cooles" einbauen und habe mich an die Intro Animation gesetzt. Diese setzte ich vor allem mit CSS um, aber trotzdem war JS notwendig, um den Übergang auf die Hauptseite zu ermöglichen.
Den Text teilte ich in Blöcke auf und arbeitete nun an Animationen für diesen. Auch hier war CSS von Bedeutung, aber für die Scrolling Detection war JS von grosser Bedeutung. Für die Experimentseite, wo ich die mögliche Darstellung eines interaktiven Filmes im Browser testen möchte, machte ich eine neue Seite. Den Teil setzte ich hauptsächlich mit Javascript um. Ich nutzte den Nativen Browser Video Player und blendete auf diesem Buttons nach einer Gewissen Zeit im Video ein, welche die Source vom Video verändern. Die Verbesserungen der Introanimation, wurde auch viel JS lastiger.


# Probleme

Abgesehen davon, dass GitHub das README.md file nicht autosaved und ich den ganzen Text hier jetzt zum zweiten Mal schreibe, gab es ein paar Herausforderungen. Die Introanimation nervte mich sehr schnell, denn ich wollte nicht bei jedem Refresh 5,5s warten. Schnell schrieb ich das JS temporär um, dass ich sie nicht mehr sehe. Erst dachte ich, dass es mega kompliziert wird, eine Funktion einzubauen, wo der Besucher die Animation nur einmal sieht. Da hatte ich schon komplizierte Lösungen mit Local Storage im Kopf und stiess dann schliesslich auf Session Storage, was genau meinen Zweck erfüllte.
Abgesehen davon, dass der Interaktive Player nicht im Fullscreen und nicht auf Mobilen Geräten funktioniert, hat bei den Funktionen erstmal garnichts funktioniert. Die choiceButtons wurden manchmal nicht angezeigt, manchmal schon und als ich endlich den Z-Index auf 200 stellte, waren sie immer da, wenn sie es sein sollten. Der Reset Button sollte ursprünglich nicht die Seite neuladen, aber sobald ich die Reset Funktion ins JS schrieb, wurden die Choicebuttons nicht mehr angezeigt. Es gibt möglichkeiten, Buttons im Fullscreen anzuzeigen, aber ich bekam es mit der JS Fullscreen api nicht so einfach hin. Ich müsste vermutlich einen eigenen Videoplayer programmieren, was ich mir sehr aufwendig vorstelle. Ausserdem müsste ich noch einen Detector einbauen, der erkennt ob der User auf dem Handy unterwegs ist und dann im JS das ganze Choice System umstellen. Dafür bräuchte ich vermutlich eigene Unterseiten für jede Auswahlmöglichkeit. Ich habe es auch mit Alerts schon probiert aber scheinbar kann man dem Benutzer so nur Ja und Nein Fragen stellen.
Es gibt also noch vieles, wo ich an diesem Player arbeiten könnte, aber ich weiss auf jeden Fall, wie ich da vorginge.

# Quellen

- W3Schools
- W3Schools
- W3Schools <33

- Codepen
- Stackoverflow
- Modzialla Docs

- ChatGPT (Ideen für JS Funktionen, welche nicht funktionieren.. und Hauptsächlich Debugging, wenn Stackoverflow kp hat)
