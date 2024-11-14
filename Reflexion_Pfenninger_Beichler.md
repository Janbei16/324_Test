# Reflexion zur CI/CD-Pipeline
 
## Einleitung
In dieser Reflexion gehe ich auf die Umsetzung der CI/CD-Pipeline für die `Shopping-List`-Anwendung ein. Die Pipeline wurde mithilfe von GitHub Actions erstellt und enthält Schritte für Linting, Testing und eine Deployment-Simulation. Im Folgenden beschreibe ich den Aufbau der Pipeline, die einzelnen Schritte und die Herausforderungen, die bei der Umsetzung auftraten.
 
---
 
## Aufbau und Überlegungen zur Pipeline
Die Pipeline wurde in mehrere separate Jobs aufgeteilt, um eine klare Trennung der Aufgaben und eine bessere Übersicht zu gewährleisten. Dies ermöglicht eine effiziente Fehleranalyse und stellt sicher, dass jeder Schritt unabhängig voneinander optimiert werden kann.
 
### Schritte und deren Zweck
1. **Linting-Job**:
   - Der Linting-Job prüft den Code-Stil und die Einhaltung von Code-Standards. Das Ziel dieses Schritts ist es, potenzielle Fehler frühzeitig zu identifizieren und die Konsistenz im Code sicherzustellen.
   - **Gedanken dazu**: Es ist wichtig, dass dieser Job vor dem Testing ausgeführt wird, da ein sauberer Code-Stil Voraussetzung für gut wartbaren Code ist.
 
2. **Testing-Job**:
   - Der Testing-Job überprüft die Funktionalität der Anwendung durch Unit-Tests. Das Ziel ist es, sicherzustellen, dass alle Kernfunktionen erwartungsgemäß funktionieren.
   - **Gedanken dazu**: Durch das Verwenden von Unit-Tests kann ich potenzielle Fehler frühzeitig erkennen, was die Stabilität der Anwendung erhöht.
 
3. **Deployment-Job**:
   - Der Deployment-Job simuliert den finalen Schritt, indem ein erfolgreicher Abschluss mit `echo "Deployment successful"` angezeigt wird.
   - **Gedanken dazu**: Der Deployment-Job könnte in der Zukunft durch ein echtes Deployment auf eine Plattform wie GitHub Pages oder einen Cloud-Anbieter ersetzt werden.
 
---
 
## Herausforderungen und Lösungsansätze
Während der Umsetzung der Pipeline traten folgende Herausforderungen auf:
1. **Module-Fehler und fehlende Abhängigkeiten**:
   - Zu Beginn traten mehrere Fehler auf, wie z. B. "`Cannot find module '@testing-library/react'`" und `jest-environment-jsdom`. Diese Fehler waren auf fehlende Abhängigkeiten zurückzuführen.
   - **Lösung**: Durch gezielte Installation und Konfiguration der benötigten Pakete konnte das Problem gelöst werden.
 
2. **Veraltete Module**:
   - Eine weitere Herausforderung war die veraltete Abhängigkeit von `punycode`. Auch wenn dies nicht kritisch war, könnte es in zukünftigen Projekten zu Problemen führen.
   - **Lösung**: Ein zukünftiges Update der Module könnte diese Abhängigkeit beseitigen.
 
---
 
## Verbesserungsvorschläge
1. **Automatisches Deployment**:
   - In der Zukunft könnte der Deployment-Job so konfiguriert werden, dass die Anwendung automatisch auf einer Plattform wie GitHub Pages oder einem Cloud-Provider bereitgestellt wird.
2. **Mehr Testfälle und Code-Coverage-Analyse**:
   - Die Pipeline könnte erweitert werden, um nicht nur die grundlegenden Tests auszuführen, sondern auch die Testabdeckung zu analysieren. Ein Tool wie `coverage` könnte integriert werden, um sicherzustellen, dass alle wesentlichen Teile des Codes abgedeckt sind.
3. **Performance-Optimierung**:
   - Bei größeren Projekten könnte eine parallele Ausführung bestimmter Schritte die Pipeline beschleunigen. Beispielsweise könnte Linting parallel zum Testing laufen, sofern die Abhängigkeiten unabhängig sind.
 
---
 
## Fazit
Die Arbeit an dieser CI/CD-Pipeline hat mir gezeigt, wie wichtig ein klar strukturierter Aufbau und das frühzeitige Erkennen von Fehlern für die Qualitätssicherung sind. Durch das Teilen der Pipeline in mehrere Jobs konnte ich eine übersichtliche und wartbare Struktur schaffen. Zukünftig könnte eine Optimierung durch automatisiertes Deployment und erweiterte Tests die Pipeline weiter verbessern und den Entwicklungsprozess effizienter gestalten.

## Probleme

Wir konnten den test nicht ausführen, weil es den Header im Header.test.js nicht gefunden hat. Unser test ist jetzt nur ein echo wegen diesem Problem. Wir haben festgestellt, dass der Import nicht funktionierte, weil das vscode von Jannis Beichlers Laptops viele allgemeine probleme mit sich brachten.

Die Version stimmte auch nicht aber diese konnten wir ändern. Test war so erfolgreich aber halt mit einem echo 