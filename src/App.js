import React, { Component } from 'react';
import './App.css';
// import {dataOuter} from './includes/data.js';
// import {dataOuterMessages} from './includes/data.js';
import Aux from './hoc/Auxiliary/Auxiliary';
import Paginator from './components/Paginator';

let dataOuter = [{"ProjectName":"Hotel","groupNumber":1,"projectDeadline":"Mon, 12 Nov 2018 22:56:05","subTask":[{"finishedStatus":0,"name":["Alex"],"contact":"Alexander@gmail.com","employer":"Interwood","task":"CRM-system","taskname":"Design ARCHItec","taskID":1542206514482,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Mon, 10 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Develop CRM-system using data pointed in employer mail. Additional info in your email"},{"finishedStatus":0,"name":["Andrew"],"contact":"Alexander@gmail.com","employer":"Artera","task":"Design-system","taskname":"Garage building project","taskID":1542201484125,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Sun, 23 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Design Sport building using data pointed in employer mail. Additional info in your email"},{"finishedStatus":0,"name":["Anastacia"],"contact":"berezjukAlexander@gmail.com","employer":"Aktiko","task":"Sketching tables","taskname":"Sketching furniture","taskID":1542201491556,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Sun, 23 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Design Bank building using data pointed in employer mail. Additional info in your email"}]},{"ProjectName":"Hotel","groupNumber":1,"projectDeadline":"Mon, 12 Nov 2018 22:56:05","subTask":[{"finishedStatus":0,"name":["Julia"],"contact":"berezjukAlexander@gmail.com","employer":"Interwood","task":"Furniture design","taskname":"Furniture design","taskID":1542206514483,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Wed, 19 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Develop CRM-system using data pointed in employer mail. Additional info in your email"},{"finishedStatus":0,"name":["Stephanie"],"contact":"berezjukAlexander@gmail.com","employer":"Artera","task":"CRM-system","taskname":"Furniture design","taskID":1542201484126,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Wed, 19 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Design Sport building using data pointed in employer mail. Additional info in your email"},{"finishedStatus":0,"name":["Alex"],"contact":"berezjukAlexander@gmail.com","employer":"Aktiko","task":"Actera-system","taskname":"Cottege design","taskID":1542201491557,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Thu, 13 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Design Bank building using data pointed in employer mail. Additional info in your email"}]},{"ProjectName":"Hotel","groupNumber":1,"projectDeadline":"Mon, 12 Nov 2018 22:56:05","subTask":[{"finishedStatus":0,"name":["Egor"],"contact":"berezjukAlexander@gmail.com","employer":"Interwood","task":"ARTERIUM","taskname":"CRM-design","taskID":1542206514484,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Mon, 10 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Develop CRM-system using data pointed in employer mail. Additional info in your email"},{"finishedStatus":0,"name":["AlexJR"],"contact":"berezjukAlexander@gmail.com","employer":"Artera","task":"CRM-system","taskname":"Sketching shelves","taskID":1542201484127,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Mon, 31 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Design Sport building using data pointed in employer mail. Additional info in your email"},{"finishedStatus":0,"name":["Elena"],"contact":"berezjukAlexander@gmail.com","employer":"Aktiko","task":"CRM-system","taskname":"Fixing design mistakes","taskID":1542201491558,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Mon, 31 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Design Bank building using data pointed in employer mail. Additional info in your email"}]},{"ProjectName":"Hotel","groupNumber":1,"projectDeadline":"Mon, 12 Nov 2018 22:56:05","subTask":[{"finishedStatus":0,"name":["Julia"],"contact":"berezjukAlexander@gmail.com","employer":"Interwood","task":"Feedback","taskname":"Feedback","taskID":1542206514488,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Mon, 31 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Develop CRM-system using data pointed in employer mail. Additional info in your email"},{"finishedStatus":0,"name":["Andrew"],"contact":"berezjukAlexander@gmail.com","employer":"Artera","task":"Morning cup","taskname":"Report on design","taskID":1542201484129,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Mon, 31 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Design Sport building using data pointed in employer mail. Additional info in your email"},{"finishedStatus":0,"name":["Alex"],"contact":"berezjukAlexander@gmail.com","employer":"Aktiko","task":"Report","taskname":"Year report","taskID":154220149000,"assignmentDate":"Wed, 28 Nov 2018 11:30:00","subTaskDeadline":"Mon, 31 Dec 2018 11:55:00","status":"Preprogress","free":0,"skills":"JS","groupPriority":0,"perfGroupPrior":0,"await":false,"parallel":1,"description":"Design Bank building using data pointed in employer mail. Additional info in your email"}]},{"ProjectName":"First","projectDeadline":"Tue Dec 25 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","subTask":[{"finishedStatus":0,"name":["Rita"],"task":"First","taskname":"First","assignmentDate":"Mon Dec 03 2018 17:30:44 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Tue Dec 25 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Iqusion","description":"dsgfdgdfgdfgd","taskID":1543851044385}]},{"ProjectName":"Hello","projectDeadline":"Tue Dec 25 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","subTask":[{"finishedStatus":0,"name":["Mark"],"task":"Hello","taskname":"Hello","assignmentDate":"Mon Dec 03 2018 17:31:03 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Tue Dec 25 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Fghngnghn","description":"dsgfdgdfgdfgd","taskID":1543851063096}]},{"ProjectName":"IQisdfpsdof","projectDeadline":"Thu Dec 27 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","subTask":[{"finishedStatus":0,"name":["George"],"task":"IQisdfpsdof","taskname":"IQisdfpsdof","assignmentDate":"Mon Dec 03 2018 17:31:29 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Thu Dec 27 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"POksdfdkp","description":"dsgfdgdfgdfgd","taskID":1543851089416}]},{"ProjectName":"Aselsan","projectDeadline":"12/31/2018","subTask":[{"finishedStatus":0,"name":["Anastacia"],"task":"Aselsan","taskname":"IQusion","assignmentDate":"Mon Dec 03 2018 18:38:50 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Tue Dec 25 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design some thim","taskID":1543855130304},{"finishedStatus":0,"name":["Julia"],"task":"Aselsan","taskname":"IQusion","assignmentDate":"Mon Dec 03 2018 18:38:56 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Tue Dec 25 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design some thim","taskID":1543855136831},{"finishedStatus":0,"name":["Stephanie"],"task":"Aselsan","taskname":"IQusion","assignmentDate":"Mon Dec 03 2018 18:39:00 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Tue Dec 25 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design some thim","taskID":1543855140262}]},{"ProjectName":"Tulzai","projectDeadline":"12/12/2018","subTask":[{"finishedStatus":0,"name":["Egor"],"task":"Tulzai","taskname":"Designing car station","assignmentDate":"Mon Dec 03 2018 19:29:40 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 15:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"AutoCAR","description":"Design car station. Additional info on your email.","taskID":1543858180693},{"finishedStatus":0,"name":["Elena"],"task":"Tulzai","taskname":"Calcalating costs","assignmentDate":"Mon Dec 03 2018 19:30:51 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 15:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"AutoCAR","description":"Design car station. Additional info on your email.","taskID":1543858251132},{"finishedStatus":0,"name":["Rita"],"task":"Tulzai","taskname":"Calcalating estimate","assignmentDate":"Mon Dec 03 2018 19:31:21 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 15:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"AutoCAR","description":"Design car station. Additional info on your email.","taskID":1543858281789},{"finishedStatus":0,"name":["Mark"],"task":"Tulzai","taskname":"Calcalating estimate","assignmentDate":"Mon Dec 03 2018 19:31:51 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 15:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"AutoCAR","description":"Calculate project costs. Additional info on your email.","taskID":1543858311500},{"finishedStatus":0,"name":["George"],"task":"Tulzai","taskname":"Design car station","assignmentDate":"Mon Dec 03 2018 19:32:19 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 15:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"AutoCAR","description":"Design car station communications. Additional info on your email.","taskID":1543858339445}]},{"ProjectName":"Greetico","projectDeadline":"12/31/2018","subTask":[{"finishedStatus":0,"name":["Alex"],"task":"Greetico","taskname":"Designing bar","assignmentDate":"Mon Dec 03 2018 19:34:03 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Design bar. Additional info on your email.","taskID":1543858443582},{"finishedStatus":0,"name":["Andrew"],"task":"Greetico","taskname":"Design communications","assignmentDate":"Mon Dec 03 2018 19:35:02 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Design bar communication. Additional info on your email.","taskID":1543858502718},{"finishedStatus":0,"name":["Anastacia"],"task":"Greetico","taskname":"Design tables","assignmentDate":"Mon Dec 03 2018 19:35:22 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Design bar tables. Additional info on your email.","taskID":1543858522429},{"finishedStatus":0,"name":["Julia"],"task":"Greetico","taskname":"Design chairs","assignmentDate":"Mon Dec 03 2018 19:35:37 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Design bar chairs. Additional info on your email.","taskID":1543858537653},{"finishedStatus":0,"name":["Stephanie"],"task":"Greetico","taskname":"Design sofa","assignmentDate":"Mon Dec 03 2018 19:35:59 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Design bar sofas. Additional info on your email.","taskID":1543858559206},{"finishedStatus":0,"name":["AlexJR"],"task":"Greetico","taskname":"Meeting with customer","assignmentDate":"Mon Dec 03 2018 19:36:56 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Correct customer demands. Additional info on your email.","taskID":1543858616093},{"finishedStatus":0,"name":["Elena"],"task":"Greetico","taskname":"Estimate calculating","assignmentDate":"Mon Dec 03 2018 19:37:56 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Calculate costs concerned bar design. Additional info on your email.","taskID":1543858676909},{"finishedStatus":0,"name":["Rita"],"task":"Greetico","taskname":"Design bar lights","assignmentDate":"Mon Dec 03 2018 19:39:10 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Design bar lights. Lights should have different colors. Additional info on your email.","taskID":1543858750669},{"finishedStatus":0,"name":["Mark"],"task":"Greetico","taskname":"Design bar lights","assignmentDate":"Mon Dec 03 2018 19:39:17 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Design bar lights. Lights should have different colors. Additional info on your email.","taskID":1543858757333},{"finishedStatus":0,"name":["George"],"task":"Greetico","taskname":"Design bar lights","assignmentDate":"Mon Dec 03 2018 19:39:22 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 24 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Greetico pubs","description":"Design bar lights. Lights should have different colors. Additional info on your email.","taskID":1543858762660}]},{"ProjectName":"Enrico","projectDeadline":"12/12/2018","subTask":[{"finishedStatus":0,"name":["Alex"],"task":"Enrico","taskname":"Design restaurant","assignmentDate":"Mon Dec 03 2018 19:42:08 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Design restaurant . You should perform three different variants. Additional info on your email.","taskID":1543858928509},{"finishedStatus":0,"name":["Andrew"],"task":"Enrico","taskname":"Calculation norms","assignmentDate":"Mon Dec 03 2018 19:43:34 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Calculate restaurant building norms. You should ask Alex about building. Additional info on your email.","taskID":1543859014116},{"finishedStatus":0,"name":["Anastacia"],"task":"Enrico","taskname":"Furniture design","assignmentDate":"Mon Dec 03 2018 19:44:25 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Design restaurant furniture. You should ask Alex about building. Additional info on your email.","taskID":1543859065093},{"finishedStatus":0,"name":["Julia"],"task":"Enrico","taskname":"Chosing tableware","assignmentDate":"Mon Dec 03 2018 19:47:02 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Choose restaurant tableware. You should ask Anastacia about interier. Additional info on your email.","taskID":1543859222125},{"finishedStatus":0,"name":["Stephanie"],"task":"Enrico","taskname":"Design tables","assignmentDate":"Mon Dec 03 2018 19:47:40 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Design restaurant tables. You should ask Anastacia about interier. Additional info on your email.","taskID":1543859260532},{"finishedStatus":0,"name":["AlexJR"],"task":"Enrico","taskname":"Design sofas","assignmentDate":"Mon Dec 03 2018 19:47:56 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Design restaurant tables. You should ask Anastacia about interier. Additional info on your email.","taskID":1543859276205},{"finishedStatus":0,"name":["Rita"],"task":"Enrico","taskname":"Design shelves","assignmentDate":"Mon Dec 03 2018 19:48:07 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Design restaurant tables. You should ask Anastacia about interier. Additional info on your email.","taskID":1543859287733},{"finishedStatus":0,"name":["Mark"],"task":"Enrico","taskname":"Design kitchen","assignmentDate":"Mon Dec 03 2018 19:48:17 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Design restaurant tables. You should ask Anastacia about interier. Additional info on your email.","taskID":1543859297653},{"finishedStatus":0,"name":["George"],"task":"Enrico","taskname":"Design sofas","assignmentDate":"Mon Dec 03 2018 19:48:54 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Design restaurant sofas. You should ask Anastacia about interier. Additional info on your email.","taskID":1543859334205},{"finishedStatus":0,"name":["Elena"],"task":"Enrico","taskname":"Project calculation","assignmentDate":"Mon Dec 03 2018 19:49:12 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Wed Dec 12 2018 13:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Enrico","description":"Design restaurant sofas. You should ask Anastacia about interier. Additional info on your email.","taskID":1543859352932}]},{"ProjectName":"Aquita","projectDeadline":"12/07/2018","subTask":[]},{"ProjectName":"Stavrida","projectDeadline":"12/12/2018","subTask":[{"finishedStatus":0,"name":["Alex"],"task":"Stavrida","taskname":"First","assignmentDate":"Mon Dec 03 2018 20:14:33 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Design gas station. Additional info is on your email.","taskID":1543860873083},{"finishedStatus":0,"name":["Andrew"],"task":"Stavrida","taskname":"Garden design","assignmentDate":"Mon Dec 03 2018 20:15:27 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Design garden. Additional info is on your email.","taskID":1543860927212},{"finishedStatus":0,"name":["Anastacia"],"task":"Stavrida","taskname":"Garden design","assignmentDate":"Mon Dec 03 2018 20:15:34 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Design garden. Additional info is on your email.","taskID":1543860934708},{"finishedStatus":0,"name":["Julia"],"task":"Stavrida","taskname":"Garden design","assignmentDate":"Mon Dec 03 2018 20:15:37 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Design garden. Additional info is on your email.","taskID":1543860937988},{"finishedStatus":0,"name":["Stephanie"],"task":"Stavrida","taskname":"Plants selection","assignmentDate":"Mon Dec 03 2018 20:16:08 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Design garden. Additional info is on your email.","taskID":1543860968124},{"finishedStatus":0,"name":["AlexJR"],"task":"Stavrida","taskname":"Plants selection","assignmentDate":"Mon Dec 03 2018 20:16:18 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Design garden. Additional info is on your email.","taskID":1543860978388},{"finishedStatus":0,"name":["Elena"],"task":"Stavrida","taskname":"Plants project calc","assignmentDate":"Mon Dec 03 2018 20:16:42 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Plants project calculations. Additional info is on your email.","taskID":1543861002340},{"finishedStatus":0,"name":["Rita"],"task":"Stavrida","taskname":"Plants project calc","assignmentDate":"Mon Dec 03 2018 20:16:47 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Plants project calculations. Additional info is on your email.","taskID":1543861007116},{"finishedStatus":0,"name":["Mark"],"task":"Stavrida","taskname":"Garden ligth design","assignmentDate":"Mon Dec 03 2018 20:17:26 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Design garden design. Additional info is on your email.","taskID":1543861046972},{"finishedStatus":0,"name":["George"],"task":"Stavrida","taskname":"Garden ligth design","assignmentDate":"Mon Dec 03 2018 20:17:30 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Ifist","description":"Design garden design. Additional info is on your email.","taskID":1543861050620}]},{"ProjectName":"Tocordo","projectDeadline":"12/25/2018","subTask":[{"finishedStatus":0,"name":["Andrew"],"task":"Tocordo","taskname":"Tocordo design","assignmentDate":"Mon Dec 03 2018 20:23:53 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design garden design. Additional info is on your email.","taskID":1543861433300},{"finishedStatus":0,"name":["Anastacia"],"task":"Tocordo","taskname":"Tocordo design","assignmentDate":"Mon Dec 03 2018 20:23:57 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design garden design. Additional info is on your email.","taskID":1543861437139},{"finishedStatus":0,"name":["Julia"],"task":"Tocordo","taskname":"Tocordo design","assignmentDate":"Mon Dec 03 2018 20:24:00 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design garden design. Additional info is on your email.","taskID":1543861440509},{"finishedStatus":0,"name":["Stephanie"],"task":"Tocordo","taskname":"Design taberco bar","assignmentDate":"Mon Dec 03 2018 20:24:18 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design garden design. Additional info is on your email.","taskID":1543861458819},{"finishedStatus":0,"name":["AlexJR"],"task":"Tocordo","taskname":"Design taberco bar","assignmentDate":"Mon Dec 03 2018 20:24:23 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design garden design. Additional info is on your email.","taskID":1543861463084},{"finishedStatus":0,"name":["Elena"],"task":"Tocordo","taskname":"Taberco cost","assignmentDate":"Mon Dec 03 2018 20:24:47 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Calculate taberco cost. Additional info is on your email.","taskID":1543861487356},{"finishedStatus":0,"name":["Rita"],"task":"Tocordo","taskname":"Taberco cost","assignmentDate":"Mon Dec 03 2018 20:24:52 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Calculate taberco cost. Additional info is on your email.","taskID":1543861492116},{"finishedStatus":0,"name":["Mark"],"task":"Tocordo","taskname":"Taberco lights","assignmentDate":"Mon Dec 03 2018 20:25:33 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design and calculate taberco bar lights. Suggest several variants. Additional info is on your email.","taskID":1543861533851},{"finishedStatus":0,"name":["George"],"task":"Tocordo","taskname":"Taberco lights","assignmentDate":"Mon Dec 03 2018 20:25:37 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sat Dec 15 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design and calculate taberco bar lights. Suggest several variants. Additional info is on your email.","taskID":1543861537692}]},{"ProjectName":"Rubben","projectDeadline":"12/12/2018","subTask":[]},{"ProjectName":"Football","projectDeadline":"12/07/2018","subTask":[{"finishedStatus":0,"name":["Alex"],"task":"Football","taskname":"Design cup","assignmentDate":"Mon Dec 03 2018 20:47:56 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design cup with football player photo. Additional info is in your email.","taskID":1543862876668},{"finishedStatus":0,"name":["Andrew"],"task":"Football","taskname":"Design cup","assignmentDate":"Mon Dec 03 2018 20:48:00 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design cup with football player photo. Additional info is in your email.","taskID":1543862880379},{"finishedStatus":0,"name":["Anastacia"],"task":"Football","taskname":"Cup design","assignmentDate":"Mon Dec 03 2018 20:48:10 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design cup with football player photo. Additional info is in your email.","taskID":1543862890643},{"finishedStatus":0,"name":["Julia"],"task":"Football","taskname":"Cup picture","assignmentDate":"Mon Dec 03 2018 20:48:31 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design cup picture. Additional info is in your email.","taskID":1543862911347},{"finishedStatus":0,"name":["Stephanie"],"task":"Football","taskname":"Design sportcup","assignmentDate":"Mon Dec 03 2018 20:49:02 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design sportcup. Additional info is in your email.","taskID":1543862942139},{"finishedStatus":0,"name":["Egor"],"task":"Football","taskname":"Design sportcup","assignmentDate":"Mon Dec 03 2018 20:49:05 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design sportcup. Additional info is in your email.","taskID":1543862945347},{"finishedStatus":0,"name":["AlexJR"],"task":"Football","taskname":"Design sportcup","assignmentDate":"Mon Dec 03 2018 20:49:10 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design sportcup. Additional info is in your email.","taskID":1543862950859},{"finishedStatus":0,"name":["AlexJR"],"task":"Football","taskname":"Sport project cost","assignmentDate":"Mon Dec 03 2018 20:49:42 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design sportcup. Additional info is in your email.","taskID":1543862982043},{"finishedStatus":0,"name":["Rita"],"task":"Football","taskname":"Sport project cost","assignmentDate":"Mon Dec 03 2018 20:49:54 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design sportcup. Additional info is in your email.","taskID":1543862994427},{"finishedStatus":0,"name":["Mark"],"task":"Football","taskname":"Uniform team design","assignmentDate":"Mon Dec 03 2018 20:50:23 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design football team uniform. Additional info is in your email.","taskID":1543863023291},{"finishedStatus":0,"name":["George"],"task":"Football","taskname":"Uniform team design","assignmentDate":"Mon Dec 03 2018 20:50:30 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 19:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Obolon","description":"Design football team uniform. Additional info is in your email.","taskID":1543863030539}]},{"ProjectName":"Gridaki","projectDeadline":"12/10/2018","subTask":[{"finishedStatus":0,"name":["Alex"],"task":"Gridaki","taskname":"Design furniture","assignmentDate":"Mon Dec 03 2018 20:51:40 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design moderno furniture. Additional info is in your email.","taskID":1543863100219},{"finishedStatus":0,"name":["Andrew"],"task":"Gridaki","taskname":"Furniture design","assignmentDate":"Mon Dec 03 2018 20:51:52 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design moderno furniture. Additional info is in your email.","taskID":1543863112747},{"finishedStatus":0,"name":["Anastacia"],"task":"Gridaki","taskname":"Design furniture","assignmentDate":"Mon Dec 03 2018 20:52:03 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design moderno furniture. Additional info is in your email.","taskID":1543863123947},{"finishedStatus":0,"name":["Julia"],"task":"Gridaki","taskname":"Table design","assignmentDate":"Mon Dec 03 2018 20:52:16 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design moderno furniture. Additional info is in your email.","taskID":1543863136011},{"finishedStatus":0,"name":["Stephanie"],"task":"Gridaki","taskname":"Table design","assignmentDate":"Mon Dec 03 2018 20:52:19 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design moderno furniture. Additional info is in your email.","taskID":1543863139235},{"finishedStatus":0,"name":["Egor"],"task":"Gridaki","taskname":"Shelves design","assignmentDate":"Mon Dec 03 2018 20:52:36 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design moderno furniture. Additional info is in your email.","taskID":1543863156730},{"finishedStatus":0,"name":["AlexJR"],"task":"Gridaki","taskname":"Shelves design","assignmentDate":"Mon Dec 03 2018 20:52:39 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Design moderno furniture. Additional info is in your email.","taskID":1543863159698},{"finishedStatus":0,"name":["Elena"],"task":"Gridaki","taskname":"Year report","assignmentDate":"Mon Dec 03 2018 20:53:26 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Prepare an annual report. Additional info is in your email.","taskID":1543863206851},{"finishedStatus":0,"name":["Rita"],"task":"Gridaki","taskname":"Quarter report","assignmentDate":"Mon Dec 03 2018 20:53:43 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Prepare a quarter report. Additional info is in your email.","taskID":1543863223003},{"finishedStatus":0,"name":["Mark"],"task":"Gridaki","taskname":"Annual report","assignmentDate":"Mon Dec 03 2018 20:54:19 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Prepare an annual report - companie achievements. Additional info is in your email.","taskID":1543863259426},{"finishedStatus":0,"name":["George"],"task":"Gridaki","taskname":"Annual report","assignmentDate":"Mon Dec 03 2018 20:54:23 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Mon Dec 10 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"IQusion","description":"Prepare an annual report - companie achievements. Additional info is in your email.","taskID":1543863263122}]},{"ProjectName":"Englikan","projectDeadline":"12/07/2018","subTask":[{"finishedStatus":0,"name":["Alex"],"task":"Englikan","taskname":"Year report","assignmentDate":"Mon Dec 03 2018 20:55:59 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Prepare an annual report - companie achievements. Additional info is in your email.","taskID":1543863359114},{"finishedStatus":0,"name":["Andrew"],"task":"Englikan","taskname":"Annual statistics","assignmentDate":"Mon Dec 03 2018 20:56:17 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Prepare an annual statistics - companie achievements. Additional info is in your email.","taskID":1543863377075},{"finishedStatus":0,"name":["Anastacia"],"task":"Englikan","taskname":"Annual statistics","assignmentDate":"Mon Dec 03 2018 20:56:42 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Prepare an annual statistics - companie achievements. Additional info is in your email.","taskID":1543863402754},{"finishedStatus":0,"name":["Julia"],"task":"Englikan","taskname":"Tax return report","assignmentDate":"Mon Dec 03 2018 20:57:38 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Prepare tax report. Additional info is in your email.","taskID":1543863458634},{"finishedStatus":0,"name":["Stephanie"],"task":"Englikan","taskname":"Tax report","assignmentDate":"Mon Dec 03 2018 20:57:47 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Prepare tax report. Additional info is in your email.","taskID":1543863467115},{"finishedStatus":0,"name":["Egor"],"task":"Englikan","taskname":"Meeting with clients","assignmentDate":"Mon Dec 03 2018 20:58:41 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Report to clients about their orders. Additional info is in your email.","taskID":1543863521155},{"finishedStatus":0,"name":["AlexJR"],"task":"Englikan","taskname":"Business trip","assignmentDate":"Mon Dec 03 2018 20:59:27 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Business trip to Germany. Additional info is in your email.","taskID":1543863567914},{"finishedStatus":0,"name":["Elena"],"task":"Englikan","taskname":"Business trip","assignmentDate":"Mon Dec 03 2018 20:59:31 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Business trip to Germany. Additional info is in your email.","taskID":1543863571275},{"finishedStatus":0,"name":["Rita"],"task":"Englikan","taskname":"Design sofa","assignmentDate":"Mon Dec 03 2018 21:00:09 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Design modern sofa in several variants.","taskID":1543863609861},{"finishedStatus":0,"name":["Mark"],"task":"Englikan","taskname":"Sofa design","assignmentDate":"Mon Dec 03 2018 21:00:19 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Design modern sofa in several variants.","taskID":1543863619050},{"finishedStatus":0,"name":["George"],"task":"Englikan","taskname":"Table design","assignmentDate":"Mon Dec 03 2018 21:00:33 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Fri Dec 07 2018 18:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Design modern table in several variants.","taskID":1543863633483}]},{"ProjectName":"Annual report","projectDeadline":"12/30/2018","subTask":[{"finishedStatus":0,"name":["Alex"],"task":"Annual report","taskname":"Annual report","assignmentDate":"Mon Dec 03 2018 21:03:44 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make your annual report.","taskID":1543863824026},{"finishedStatus":0,"name":["Andrew"],"task":"Annual report","taskname":"Annual report","assignmentDate":"Mon Dec 03 2018 21:03:46 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make your annual report.","taskID":1543863826930},{"finishedStatus":0,"name":["Anastacia"],"task":"Annual report","taskname":"Annual report","assignmentDate":"Mon Dec 03 2018 21:03:50 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make your annual report.","taskID":1543863830074},{"finishedStatus":0,"name":["Julia"],"task":"Annual report","taskname":"Annual report","assignmentDate":"Mon Dec 03 2018 21:03:53 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make your annual report.","taskID":1543863833355},{"finishedStatus":0,"name":["Julia"],"task":"Annual report","taskname":"Tax return report","assignmentDate":"Mon Dec 03 2018 21:04:33 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make your annual report.","taskID":1543863873290},{"finishedStatus":0,"name":["Stephanie"],"task":"Annual report","taskname":"Tax return report","assignmentDate":"Mon Dec 03 2018 21:04:37 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make your annual report.","taskID":1543863877211},{"finishedStatus":0,"name":["AlexJR"],"task":"Annual report","taskname":"Financial report","assignmentDate":"Mon Dec 03 2018 21:04:50 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make your annual report.","taskID":1543863890626},{"finishedStatus":0,"name":["Elena"],"task":"Annual report","taskname":"Financial report","assignmentDate":"Mon Dec 03 2018 21:04:53 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make your annual report.","taskID":1543863893795},{"finishedStatus":0,"name":["Rita"],"task":"Annual report","taskname":"Business trip","assignmentDate":"Mon Dec 03 2018 21:05:18 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Business trip to Poland.","taskID":1543863918490},{"finishedStatus":0,"name":["Mark"],"task":"Annual report","taskname":"Business trip","assignmentDate":"Mon Dec 03 2018 21:05:21 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Business trip to Poland.","taskID":1543863921682},{"finishedStatus":0,"name":["George"],"task":"Annual report","taskname":"Annual report","assignmentDate":"Mon Dec 03 2018 21:05:51 GMT+0200 (Восточная Европа, стандартное время)","subTaskDeadline":"Sun Dec 30 2018 11:00:00 GMT+0200 (Восточная Европа, стандартное время)","status":"Sketching","free":1,"groupPriority":1,"perfGroupPrior":1,"await":0,"parallel":1,"employer":"Manager","description":"Make company annual statistics.","taskID":1543863951442}]}]


let dataOuterMessages = {
    "Egor":{"1543660051818":{"Unread":true,"message":"Hello manager!","taskID":"1542206514484","sender":"Manager"},"1543913524135":{"Unread":true,"message":"Good afternoon! I've finished some task! Please review results on your email! Thank you!","taskID":"1542206514482","sender":"Alex"}},
    "Julia":{"1543660729815":{"Unread":true,"message":"Hello Julia!","taskID":"1542206514483","sender":"Manager"}}}

let _MS_PER_DAY = 1000 * 60 * 60 * 24;
let admin = null;
let userChoose = '';
let employees = [
  'Alex',
  'Andrew',
  'Stephanie',
  'AlexJR',
  'Anastacia',
  'Rita',
  'Elena',
  'Julia',
  'Mark',
  'George',
  'Egor'
];
let employeesIDs = [...employees];
let workingPersons = [];
let freePersons = [];
let messagesToAdmin = {};
let statuses = ['Sketching', 'Preprogress', 'In Progress', 'Testing', 'Finished'];
let blocks = document.getElementsByClassName('task');
let blocksViewed = document.getElementsByClassName('taskViewed');

let filterAll = document.querySelector('.blockMainMenuAnimatedFilterAll');
let filterDay = document.querySelector('.blockMainMenuAnimatedFilterDay');
let filterWeek = document.querySelector('.blockMainMenuAnimatedFilterWeek');
let filterMonth = document.querySelector('.blockMainMenuAnimatedFilterMonth');

let blockMainHeaderTaskPeriod = document.getElementById('blockMainHeaderTaskPeriod');
let headerMenuScrollable = document.querySelector(".headerMenuScrollable");
let headerStartButton = document.querySelector(".headerStart__button");

let logIn = document.getElementById('login');
let logOut = document.getElementById('logout');
let logOutSign = document.getElementById('logoutSign');

let dataM = dataOuter;
//console.log(dataOuter);
window.localStorage.setItem('dataMain', JSON.stringify(dataM)); // and store it in localStorage. In further we will work with this data - adding or removing some tasks
let dataMain = window.localStorage.getItem('dataMain'); // During first load read data with tasks from local storage
dataMain = JSON.parse(dataMain);
//console.log(dataMain);

// if (dataMain == null) {
//   // If there is no data yet then we store some default dataMain
//   let dataM = dataOuter;
//   console.log(dataOuter);
//   window.localStorage.setItem('dataMain', JSON.stringify(dataM)); // and store it in localStorage. In further we will work with this data - adding or removing some tasks
//   dataMain = window.localStorage.getItem('dataMain');
//   dataMain = JSON.parse(dataMain);
// } else {
//   dataMain = JSON.parse(dataMain); // if data is present in localStarage then parsing and saving it in variable to work with it in application
// }

freePersons = [...employeesIDs];

let tasksCreatedBuffer = []; // здесь хранятся все созданные подтаски

let pointersCollection = document.getElementsByClassName('paginatorItem');
let footer = document.querySelector('.blockMainFooter');
let chosenIndex = 1;
let backupCurrentPaginator = [];
let paginatorWrapper = document.getElementsByClassName('.paginatorWrapper');
let arrCheck = [];
let leftDots = null;
let rightDots = null;
let leftBtn = null;
let rightBtn = null;

let sliderIndex = 1;
let counter = 0;           // Amount of viewed blocks
let sliderBlockWrapperPicture = document.getElementsByClassName("sliderBlockWrapperPicture");

function f_buildSlider() {

    let sliderBlockwrapper = document.querySelector(".sliderBlockwrapper");
    let sliderBlockWrapperLabel = document.getElementsByClassName("sliderBlockWrapperPicture");
    let scrollLeft = document.getElementById("arrLeft");
    let scrollRight = document.getElementById("arrRight");
    counter = 0;

    if (sliderBlockwrapper.offsetWidth % 300 == 0) {
        counter = sliderBlockwrapper.offsetWidth / 300;
    }
    else {
        counter = Math.floor(sliderBlockwrapper.offsetWidth / 300);
    }


    if (counter <= sliderBlockWrapperLabel.length) {                // In bigger dimensions counter may exceed amount of pictures and we get error
        for (let i = 0; i < sliderBlockWrapperLabel.length; i++) {
            if (i < counter) {
                sliderBlockWrapperLabel[i].style.display = "inline-block";
            }
            else {
                sliderBlockWrapperLabel[i].style.display = "none";
            }
        }
    }

    // inserting in DOM inputs with labels
    let parent = document.querySelector(".sliderBlock");
    let referenceElement = document.querySelector(".sliderBlockwrapper");
    let dots = null;

    let del = document.querySelectorAll(".sliderBlock>input");
    if (del != null) {

        for (let d = 0; d < del.length; d++) {
            del[d].parentNode.removeChild(del[d]);
        }
    }



    if (sliderBlockWrapperLabel.length == counter) {
        dots = sliderBlockWrapperLabel.length;
    }
    else {
        dots = (sliderBlockWrapperLabel.length - counter) + 1;
    }

    let inserted = null;

    for (let b = 0; b < dots; b++) {
        let input = document.createElement("input");

        if (b == 0) {
            input.setAttribute("checked", true);
        }
        input.setAttribute("name", "slider");
        input.setAttribute("type", "radio");
        if (b != 0) {
            inserted.parentNode.insertBefore(input, inserted.nextSibling);
        }
        else {
            parent.insertBefore(input, referenceElement);
        }


        inserted = input;
    }
    sliderIndex = 1;



    scrollLeft.addEventListener('click', f_SliderGoLeft);
    scrollRight.addEventListener('click', f_SliderGoRight);

    if (scrollLeft.disabled != true) {                           // When we click BACK ARROW we have to activate FORWARD ARROW
        scrollRight.disabled = true;

    }


    if (scrollRight.disabled == true) {                           // When we click BACK ARROW we have to activate FORWARD ARROW
        scrollRight.removeAttribute('disabled');

    }
}
function f_SliderGoRight() {
    let scrollLeft = document.getElementById("arrLeft");
    let scrollRight = document.getElementById("arrRight");
    let scrollers = document.querySelectorAll("input[name='slider']");
    // if (sliderIndex+1 > scrollers.length) {}                   // Checking whether we've riched right border
    for (let s = 0; s < scrollers.length; s++) {                      // Finding what radio is checked
        if (scrollers[s].checked === true) {
            sliderIndex = s + 1;
        }
    }
    if (scrollLeft.disabled === true) {                           // When we click FORWARD ARROW we have to activate BACK ARROW
        scrollLeft.removeAttribute('disabled');
    }
    if (sliderIndex + 1 === scrollers.length) {
        sliderIndex = sliderIndex + 1;                                            // if not

        scrollRight.setAttribute("disabled", "true");

    }
    else {
        if (scrollRight.disabled === true) {
            //scrollRight.disabled == false;
        }
        sliderIndex = sliderIndex + 1;
    }
    for (let j = 0; j < scrollers.length; j++) {

        scrollers[j].removeAttribute("checked");

    }
    scrollers[sliderIndex - 1].setAttribute("checked", 'true');


    for (let i = 0; i < sliderBlockWrapperPicture.length; i++) {
        if ((i >= sliderIndex - 1) && (i < (sliderIndex + counter - 1))) {
            sliderBlockWrapperPicture[i].style.display = "inline-block";
        }
        else {
            sliderBlockWrapperPicture[i].style.display = "none";
        }
    }
}
function f_SliderGoLeft() {
    let scrollLeft = document.getElementById("arrLeft");
    let scrollRight = document.getElementById("arrRight");

    let scrollers = document.querySelectorAll("input[name='slider']");
    // Checking whether we've riched right border
    for (let s = 0; s < scrollers.length; s++) {                      // Finding out what radio has been checked before we clicked BACK ARROW
        if (scrollers[s].checked === true) {
            sliderIndex = s + 1;

        }
    }
    if (scrollRight.disabled === true) {                           // When we click BACK ARROW we have to activate FORWARD ARROW
        scrollRight.removeAttribute('disabled');

    }

    if (sliderIndex - 1 === 1) {
        sliderIndex = sliderIndex - 1;                              // if the next radio on which we transit will equal 0 then deactivate BACK ARROW

        scrollLeft.setAttribute("disabled", "true");

    }
    else {
        sliderIndex = sliderIndex - 1;

    }


    for (let j = 0; j < scrollers.length; j++) {                       // removing old checked attribute
        scrollers[j].removeAttribute("checked");
    }

    scrollers[sliderIndex - 1].setAttribute("checked", 'true');       // setting CHECKED on our next input


    for (let i = 0; i < sliderBlockWrapperPicture.length; i++) {          // displaying necessary blocks
        if ((i >= sliderIndex - 1) && (i < (sliderIndex + counter - 1))) {
            sliderBlockWrapperPicture[i].style.display = "inline-block";
        }
        else {
            sliderBlockWrapperPicture[i].style.display = "none";
        }
    }
}

function f_hideMenu() {
  let menuAnimate = document.getElementById('menuAnimate');
  let blockMainMenuAnimate = document.getElementById("blockMainMenuAnim");


  menuAnimate.style.right = '-' + menuAnimate.clientWidth + 'px';
  menuAnimate.style.opacity = 1;

  blockMainMenuAnimate.style.left = '-' + blockMainMenuAnimate.clientWidth + 'px';
  blockMainMenuAnimate.style.opacity = 1;

  //- **********************************************************************************************
  //- this code allows to transfer blocks inside .head block when body width is more than 1920px
  //- **********************************************************************************************
  if (document.body.clientWidth > 5700) {
      var t = (40 * document.body.clientWidth) / 100;
      let h = document.querySelector('.headerMenuScrollable');
      h.style.paddingLeft = t + 'px';
      h.style.paddingRight = t + 'px';
  }

  if (document.body.clientWidth > 1920 && document.body.clientWidth < 5700) {
      var t = (30 * document.body.clientWidth) / 100;
      let h = document.querySelector('.headerMenuScrollable');
      h.style.paddingLeft = t + 'px';
      h.style.paddingRight = t + 'px';
  }

  if (document.body.clientWidth < 1920) {
      let h = document.querySelector('.headerMenuScrollable');
      h.style.paddingLeft = "inherit";
      h.style.paddingRight = "inherit";
  }
};


//This code is aimed to hide side menu bar using keyframes animation above

//This code animates hiding of side-menu-bar


let btnCloseSideMenu = document.getElementById("menuAnimateBtnClose");
let btnOpenSideMenu = document.getElementById("menuAnimateBtnOpen");
let menuAnimate = document.getElementById('menuAnimate');

btnCloseSideMenu.addEventListener('click', f_hide);
btnOpenSideMenu.addEventListener('click', f_showMainSideMenu);


function f_showMainSideMenu() {
    let menuAnimate = document.getElementById('menuAnimate');
    menuAnimate.classList.add('no1');
    menuAnimate.classList.remove('no2');
    //When side menu is shown we hide burger-menu
    let barsBurger = document.getElementById('menuAnimateBtnOpen');
    barsBurger.style.opacity = 0;

    if (admin != null) {
        admin.closeInfoModal();  // Hiding modal-dialog-cards
    }


    //This code is aimed to close side menu when we tapped on the screen
    let header = document.querySelector(".header");
    let blockMain = document.querySelector(".blockMain");
    let gallery = document.getElementById("sliderBlock");
    let contacts = document.querySelector(".contacts");
    let footer = document.querySelector(".footer");
    header.addEventListener('click', f_hide);
    blockMain.addEventListener('click', f_hide);
    gallery.addEventListener('click', f_hide);
    contacts.addEventListener('click', f_hide);
    footer.addEventListener('click', f_hide);
  }
function f_hide() {
    let menuAnimate = document.getElementById('menuAnimate');
    menuAnimate.classList.add('no2');
    menuAnimate.classList.remove('no1');
    //When side menu is being hidden we show burger menu back again
    let barsBurger = document.getElementById('menuAnimateBtnOpen');
    barsBurger.style.opacity = 1;

    //This code is aimed to close side menu when we tapped on the screen
    let header = document.querySelector(".header");
    let blockMain = document.querySelector(".blockMain");
    let contacts = document.querySelector(".contacts");
    let footer = document.querySelector(".footer");
    header.removeEventListener('click', f_hide);
    blockMain.removeEventListener('click', f_hide);
    contacts.removeEventListener('click', f_hide);
    footer.removeEventListener('click', f_hide);

}

//this allows you to smoothly move around the page

let home = document.getElementById("home");
let manager = document.getElementById("Manager");
let gallery = document.getElementById("Gallery");
let contact = document.getElementById("contact");

let headerB = document.querySelector("header");
let mainB = document.querySelector(".blockMain");
let galleryB = document.querySelector(".sliderBlock");

home.addEventListener('click', function () {
    window.scrollTo(0, 0);
});
manager.addEventListener('click', function () {
    let offset = headerB.offsetHeight - headerMenuScrollable.offsetHeight;             //
    window.scrollTo(0, offset);
});
gallery.addEventListener('click', function () {
    let offset = headerB.offsetHeight + mainB.offsetHeight - headerMenuScrollable.offsetHeight;  //headerMenuScrollable.offsetHeight
    window.scrollTo(0, offset);
});
contact.addEventListener('click', function () {
    let offset = headerB.offsetHeight + mainB.offsetHeight + galleryB.offsetHeight - headerMenuScrollable.offsetHeight;   //headerMenuScrollable.offsetHeight
    window.scrollTo(0, offset);
});

//let blockMainSideMenuBtnClose = document.getElementById("blockMainSideMenuClose");

//let blockMainMenuAnimated = document.querySelector('.blockMainMenuAnimated');

// blockMainSideMenuBtnOpen.addEventListener('click', f_showBlockMainSideMenu);
//blockMainSideMenuBtnClose.addEventListener('click', f_closeBlockMainSideMenu);

function f_showBlockMainSideMenu() {
    let blockMainSideMenuBtnOpen = document.getElementById("blockMainSideMenuOpen");
    let blockMainSideMenuBtnClose = document.getElementById("blockMainSideMenuClose");
    let blockMainMenuAnimated = document.querySelector('.blockMainMenuAnimated');
    blockMainMenuAnimated.classList.add('blockSideMShow');
    blockMainMenuAnimated.classList.remove('blockSideMHide');
    blockMainSideMenuBtnOpen.style.display = "none";
    blockMainSideMenuBtnClose.style.display = "block";

    admin.closeInfoModal();   // Hiding modal-dialog-cards
}

function f_closeBlockMainSideMenu() {
    let blockMainSideMenuBtnOpen = document.getElementById("blockMainSideMenuOpen");
    let blockMainSideMenuBtnClose = document.getElementById("blockMainSideMenuClose");
    let blockMainMenuAnimated = document.querySelector('.blockMainMenuAnimated');
    
    blockMainMenuAnimated.classList.remove('blockSideMShow');
    blockMainMenuAnimated.classList.add('blockSideMHide');
    blockMainSideMenuBtnOpen.style.display = "block";
    blockMainSideMenuBtnClose.style.display = "none";
}

window.addEventListener('load', function () {
    //f_hideMenu();
    //f_buildSlider();
  });
  window.addEventListener('resize', function () {
      f_hideMenu();
      f_buildSlider();
  });

  window.addEventListener('scroll', function (e) {
      let scrollTopFix = function () {
          if ('scrollingElement' in document) {
              return document.scrollingElement;
          }

          if (navigator.userAgent.indexOf('WebKit') != -1) {
              return document.body;
          }
          return document.documentElement;
      }

      var distTop = scrollTopFix().scrollTop;

      var bar = document.querySelector('.headerMenuScrollable');

      if (distTop > 300) {
          bar.classList.add('headerMenuScrollableFixed');
      }

      if (distTop < 50) {
          if (distTop == 0) {
              bar.classList.remove('headerMenuScrollableFixed');
          }
      }
  });





class App extends Component {
  state = {
    dataMain: null
  }

  

  
  // f_showDisplay = (arrBlocks) => {
  //   // First call
  //   let pointers = Math.floor(arrBlocks.length / 10);
  //   this.f_showPagination(chosenIndex, pointers);

  //   this.f_chI(arrBlocks);
  // }

  // f_chI(arrBlocks) {
  //   let pointers = 0;
  //   if (arrBlocks.length % 10 == 0) {
  //     pointers = arrBlocks.length / 10;
  //   } else {
  //     pointers = Math.floor(arrBlocks.length / 10) + 1;
  //   }
  //   for (var i = 0; i < pointersCollection.length; i++) {
  //     if (pointersCollection[i].checked == true) {
  //       chosenIndex = i + 1;
  //       break;
  //     }
  //   }
  //   let start = (chosenIndex - 1) * 10;
  //   let end = start + 9;
  //   for (var j = 0; j < arrBlocks.length; j++) {
  //     if (j >= start && j <= end) {
  //       arrBlocks[j].style.display = 'flex';
  //     } else {
  //       arrBlocks[j].style.display = 'none';
  //     }
  //   }
  //   this.f_showPagination(chosenIndex, pointers);
  // }

  // f_showPagination(chIndex, pointers) {
  //   let startPaginator = 0;
  //   let paginatorWrapper = document.querySelector('.paginatorWrapper');

  //   if (paginatorWrapper == null) {
  //     paginatorWrapper = document.createElement('div');
  //     paginatorWrapper.className = 'paginatorWrapper';
  //     footer.appendChild(paginatorWrapper);
  //   } else {
  //     let pointersCollection = document.getElementsByClassName('paginatorItem');
  //     let pointerLabel = document.getElementsByClassName('pointerLabel');
  //     let pointersCollectionSide = document.getElementsByClassName('paginatorItemFirst');
  //     let pointerLabelSide = document.getElementsByClassName('pointerLabelFirst');
  //     let pointerLabelDotsRight = document.getElementsByClassName('pointerLabelDotsRight');

  //     for (var k = 0; k < pointerLabel.length; k++) {
  //       // here we're making paginator backup
  //       if (pointerLabel[k].style.display == 'block') {
  //         backupCurrentPaginator.push(k + 1); // [2,3,4,5,6]
  //       }
  //     }
  //     // console.log(backupCurrentPaginator);

  //     for (let j = 0; j < pointersCollection.length; j++) {
  //       pointersCollection[j].parentNode.removeChild(pointersCollection[j]);
  //       pointerLabel[j].parentNode.removeChild(pointerLabel[j]);
  //       j--;
  //     }

  //     for (let z = 0; z < pointersCollectionSide.length; z++) {
  //       pointersCollectionSide[z].parentNode.removeChild(pointersCollectionSide[z]);
  //       pointerLabelSide[z].parentNode.removeChild(pointerLabelSide[z]);
  //       z--;
  //     }

  //     for (let a = 0; a < pointerLabelDotsRight.length; a++) {
  //       pointerLabelDotsRight[a].parentNode.removeChild(pointerLabelDotsRight[a]);
  //       a--;
  //     }
  //   }

  //   // console.log(chIndex);

  //   if (pointers == 1) {
  //     return null;
  //   }

  //   if ((chIndex == 1 && pointers <= 5) || (chIndex == pointers && pointers <= 5) || (chIndex > 1 && pointers <= 5)) {
  //     // alert("I'm inside first condition")
  //     let start = 1;
  //     let limit = 4;
  //     let leftDots, rightDots, leftBtn, rightBtn, leftBtnEnable, rightBtnEnable = false;
  //     this.f_buildPaginatorItems(
  //       start,
  //       limit,
  //       pointers,
  //       chIndex,
  //       leftDots,
  //       rightDots,
  //       leftBtn,
  //       rightBtn,
  //       leftBtnEnable,
  //       rightBtnEnable
  //     );
  //   }

  //   if (chIndex == 1 && pointers > 5) {
  //     // alert("I'm inside second condition")
  //     let start = 1;
  //     let limit = 4;
  //     let leftDots = false;
  //     let rightDots = true;
  //     let leftBtn = true;
  //     let leftBtnEnable = false;
  //     let rightBtn = true;
  //     let rightBtnEnable = true;

  //     this.f_buildPaginatorItems(
  //       start,
  //       limit,
  //       pointers,
  //       chIndex,
  //       leftDots,
  //       rightDots,
  //       leftBtn,
  //       rightBtn,
  //       leftBtnEnable,
  //       rightBtnEnable
  //     );
  //   }

  //   if (chIndex == pointers && pointers > 5) {
  //     // alert("I'm inside third condition")
  //     let start = pointers - 4;
  //     let limit = pointers - 1;
  //     let leftDots = true;
  //     let rightDots = false;
  //     let leftBtn = true;
  //     let leftBtnEnable = true;
  //     let rightBtn = true;
  //     let rightBtnEnable = false;

  //     this.f_buildPaginatorItems(
  //       start,
  //       limit,
  //       pointers,
  //       chIndex,
  //       leftDots,
  //       rightDots,
  //       leftBtn,
  //       rightBtn,
  //       leftBtnEnable,
  //       rightBtnEnable
  //     );
  //   }

  //   if ((chIndex > 1 && chIndex != pointers && pointers > 5) || (chIndex < pointers && chIndex != 1 && pointers > 5)) {
  //     let leftBtn = true;
  //     let leftBtnEnable = true;
  //     let rightBtn = true;
  //     let rightBtnEnable = true;

  //     for (let i = 0; i < backupCurrentPaginator.length; i++) {
  //       if (chIndex == backupCurrentPaginator[i]) {
  //         if (backupCurrentPaginator[i - 1] != undefined && backupCurrentPaginator[i + 1] != undefined) {
  //           let start = backupCurrentPaginator[0];
  //           let limit = backupCurrentPaginator[3];
  //           if (chIndex >= 2 && chIndex < pointers && backupCurrentPaginator[0] == 1) {
  //             leftDots = false;
  //             rightDots = true;
  //           }
  //           if (chIndex >= 2 && chIndex < pointers && backupCurrentPaginator[4] == pointers) {
  //             // leftDots = true;
  //             rightDots = false;
  //           }
  //           this.f_buildPaginatorItems(
  //             start,
  //             limit,
  //             pointers,
  //             chIndex,
  //             leftDots,
  //             rightDots,
  //             leftBtn,
  //             rightBtn,
  //             leftBtnEnable,
  //             rightBtnEnable
  //           );
  //         } else {
  //           if (backupCurrentPaginator[i + 1] == undefined) {
  //             arrCheck = [...backupCurrentPaginator];
  //             for (let y = 0; y < arrCheck.length; y++) {
  //               arrCheck[y] = arrCheck[y] + 1;
  //             }
  //             console.log(arrCheck);
  //             if (chIndex >= 2 && chIndex < pointers && arrCheck[0] > 1) {
  //               leftDots = true;
  //             }
  //             if (chIndex >= 2 && chIndex < pointers && arrCheck[4] < pointers) {
  //               rightDots = true;
  //             } else if (chIndex >= 2 && chIndex < pointers && arrCheck[4] == pointers) {
  //               rightDots = false;
  //             }
  //             let start = backupCurrentPaginator[1];
  //             let limit = backupCurrentPaginator[4];
  //             //console.log(backupCurrentPaginator[1], backupCurrentPaginator[4], pointers, chIndex);
  //             this.f_buildPaginatorItems(
  //               start,
  //               limit,
  //               pointers,
  //               chIndex,
  //               leftDots,
  //               rightDots,
  //               leftBtn,
  //               rightBtn,
  //               leftBtnEnable,
  //               rightBtnEnable
  //             );
  //           }
  //           if (backupCurrentPaginator[i - 1] == undefined) {
  //             arrCheck = [...backupCurrentPaginator];
  //             for (let y = 0; y < arrCheck.length; y++) {
  //               arrCheck[y] = arrCheck[y] - 1;
  //             }
  //             if (chIndex >= 2 && chIndex < pointers && arrCheck[0] > 1) {
  //               leftDots = true;
  //             } else if (chIndex >= 2 && chIndex < pointers && arrCheck[0] == 1) {
  //               leftDots = false;
  //             }
  //             if (chIndex >= 2 && chIndex < pointers && arrCheck[4] < pointers) {
  //               rightDots = true;
  //             }
  //             let start = backupCurrentPaginator[0] - 1;
  //             let limit = backupCurrentPaginator[3] - 1;
  //             // console.log(backupCurrentPaginator[1], backupCurrentPaginator[4], pointers, chIndex);
  //             this.f_buildPaginatorItems(
  //               start,
  //               limit,
  //               pointers,
  //               chIndex,
  //               leftDots,
  //               rightDots,
  //               leftBtn,
  //               rightBtn,
  //               leftBtnEnable,
  //               rightBtnEnable
  //             );
  //           }
  //         }
  //         break;
  //       }
  //     }
  //   }
  // }

  // f_buildPaginatorItems(
  //   start,
  //   limit,
  //   pointers,
  //   chIndex,
  //   leftDots,
  //   rightDots,
  //   leftBtn,
  //   rightBtn,
  //   leftBtnEnable,
  //   rightBtnEnable
  // ) {
  //   let _start = start - 1;
  //   let _limit = limit;
  //   let text = start;
  //   //console.log(start, limit, pointers, chIndex);
  //   let paginatorWrapper = document.querySelector('.paginatorWrapper');

  //   if (leftBtn == true) {
  //     let firstInputLabel = document.createElement('label');
  //     firstInputLabel.className = 'pointerLabelFirst';
  //     firstInputLabel.setAttribute('for', 'First');
  //     let firstInputLabelText = document.createTextNode('First');
  //     firstInputLabel.appendChild(firstInputLabelText);
  //     paginatorWrapper.appendChild(firstInputLabel);

  //     let firstInput = document.createElement('input');
  //     firstInput.className = 'paginatorItemFirst';
  //     firstInput.setAttribute('type', 'radio');
  //     firstInput.setAttribute('name', 'paginatorItemTransit');
  //     firstInput.setAttribute('id', 'First');
  //     if (leftBtnEnable == true) {
  //       firstInput.addEventListener('click', this.f_transit);
  //     } else {
  //       firstInput.setAttribute('disabled', 'true');
  //     }
  //     paginatorWrapper.appendChild(firstInput);
  //   }

  //   if (leftDots == true) {
  //     let firstLabelDots = document.createElement('label');
  //     firstLabelDots.className = 'pointerLabelDotsRight';
  //     // firstInputLabel.setAttribute("for", "First");
  //     let firstLabelDotsText = document.createTextNode('...');
  //     firstLabelDots.appendChild(firstLabelDotsText);
  //     paginatorWrapper.appendChild(firstLabelDots);
  //   }

  //   for (var i = 0; i < pointers; i++) {
  //     let paginatorItem = document.createElement('input');
  //     paginatorItem.className = 'paginatorItem';
  //     paginatorItem.setAttribute('type', 'radio');
  //     paginatorItem.setAttribute('name', 'paginatorItemField');
  //     paginatorItem.setAttribute('id', i);
  //     if (i == chIndex - 1) {
  //       paginatorItem.setAttribute('checked', 'true');
  //     }
  //     paginatorItem.addEventListener('click', function () {
  //       for (var j = 0; j < pointersCollection.length; j++) {
  //         if (pointersCollection[j].checked == true) {
  //           backupCurrentPaginator = [];
  //           for (var k = 0; k < pointerLabel.length; k++) {
  //             // here we're making paginator backup
  //             if (pointerLabel[k].style.display == 'block') {
  //               backupCurrentPaginator.push(k + 1); // [2,3,4,5,6]
  //             }
  //           }

  //           this.f_chI(blocksViewed);

  //           break;
  //         }
  //       }
  //     });
  //     paginatorWrapper.appendChild(paginatorItem);

  //     let pointerLabel = document.createElement('label');
  //     pointerLabel.className = 'pointerLabel';
  //     pointerLabel.setAttribute('for', i);
  //     let pointerLabelText = document.createTextNode(i + 1);
  //     pointerLabel.appendChild(pointerLabelText);
  //     text++;
  //     paginatorWrapper.appendChild(pointerLabel);

  //     if (i <= limit && i >= _start) {
  //       //console.log(_start, _limit);
  //       pointerLabel.setAttribute('style', 'display: block');
  //     } else {
  //       pointerLabel.setAttribute('style', 'display: none');
  //     }
  //   }

  //   if (rightDots == true) {
  //     let lastLabelDots = document.createElement('label');
  //     lastLabelDots.className = 'pointerLabelDotsRight';
  //     // firstInputLabel.setAttribute("for", "First");
  //     let lastLabelDotsText = document.createTextNode('...');
  //     lastLabelDots.appendChild(lastLabelDotsText);
  //     paginatorWrapper.appendChild(lastLabelDots);
  //   }

  //   if (rightBtn == true) {
  //     let lastInput = document.createElement('input');
  //     lastInput.className = 'paginatorItemFirst';
  //     lastInput.setAttribute('type', 'radio');
  //     lastInput.setAttribute('name', 'paginatorItemTransit');
  //     lastInput.setAttribute('id', 'Second');
  //     if (rightBtnEnable == true) {
  //       lastInput.addEventListener('click', this.f_transit);
  //     } else {
  //       lastInput.setAttribute('disabled', 'true');
  //     }
  //     paginatorWrapper.appendChild(lastInput);

  //     let lastInputLabel = document.createElement('label');
  //     lastInputLabel.className = 'pointerLabelFirst';
  //     lastInputLabel.setAttribute('for', 'Second');
  //     let pointerLabelText = document.createTextNode('Last');
  //     lastInputLabel.appendChild(pointerLabelText);
  //     paginatorWrapper.appendChild(lastInputLabel);
  //   }
  // }

  // f_transit() {
  //   let pointerItem = document.getElementsByClassName('paginatorItem');
  //   let pointersCollectionSide = document.getElementsByClassName('paginatorItemFirst');
  //   pointersCollectionSide = Array.from(pointersCollectionSide);
  //   pointerItem = Array.from(pointerItem);

  //   //console.log(pointersCollectionSide)
  //   pointersCollectionSide.forEach((p, i) => {
  //     if (p.checked) {
  //       if (i == 0) {
  //         //console.log("first");
  //         pointerItem.forEach((item) => {
  //           if (item.checked) {
  //             item.checked = false;
  //           }
  //         });
  //         pointerItem[0].setAttribute('checked', true);
  //       }
  //       if (i == 1) {
  //         // console.log("last");
  //         pointerItem.forEach((item) => {
  //           if (item.checked) {
  //             item.checked = false;
  //           }
  //         });
  //         pointerItem[pointerItem.length - 1].setAttribute('checked', true);
  //       }
  //     }
  //   });
  //   this.f_chI(blocks);
  // }

  f_fillModalChooseUser() {
    var modal = document.getElementsByClassName('modalChooseUser');
    var backdrop = document.querySelector('.backdrop');
    var modalChoose = document.querySelector('.modalChooseUser');
    var closeBtnOK = document.getElementById('ChosenOK');
    let temp = null;
    let referenceElement = document.querySelector("#ChosenOK");
    closeBtnOK.setAttribute('disabled', true);


    // console.log(modalChoose);
    var select = document.createElement('select');
    select.setAttribute('size', '9');
    select.setAttribute('name', 'Personal');
    select.setAttribute('id', 'chosenUser');
    select.required = true;

    var opt = null;
    opt = document.createElement('option');
    opt.setAttribute('value', 'Manager');
    temp = document.createTextNode('Manager');
    opt.appendChild(temp);
    select.appendChild(opt);
    // console.log(select);

    for (var j = 0; j < employeesIDs.length; j++) {
      opt = document.createElement('option');
      opt.setAttribute('value', employeesIDs[j]);
      temp = document.createTextNode(employeesIDs[j]);
      opt.appendChild(temp);

      select.appendChild(opt);
    }

    modalChoose.insertBefore(select, referenceElement);
    // modalChoose.appendChild(select);

    // Открываем диалоговое окно

    backdrop.style.display = 'block'; //ставим фон диал.окна
    modal[0].classList.add('modalShowChooseUser'); //делаем видимым диал.окно

    let performers = document.getElementById('chosenUser');
    console.log(performers);
    performers.addEventListener('click', this.f_repeat);

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  }

  f_repeat = () => {
    var backdrop = document.querySelector('.backdrop');
    var closeBtn = document.getElementById('closeModalChooseUser');
    var closeBtnOK = document.getElementById('ChosenOK');
    var str="";

    //////////////////////////////////////////////////////////////////
    /////In this block we choose User ////////////////////////////////
    let choosedUser = [];

    let performers = document.querySelectorAll('#chosenUser option');

    for (var j = 0; j < performers.length; j++) {
      if (performers[j].selected) {
        //console.log(performers[i].innerHTML);
        str = performers[j].text;
        choosedUser.push(str);
      }
    }

    if (choosedUser.length == 0) {
    } else if (choosedUser !== 0) {
      closeBtnOK.removeAttribute('disabled');
      closeBtnOK.classList.remove('ChosenOKDisabled');
      backdrop.addEventListener('click', this.f_closeModalChooseUser);

      closeBtn.addEventListener('click', this.f_closeModalChooseUser);

      closeBtnOK.addEventListener('click', this.f_closeModalChooseUser);
    }
  }

  f_closeModalChooseUser = () => {
    //////////////////////////////////////////////////////////////////
    /////Here we check whether user is chosen or not ////////////////////////////////
    let choosedUser = [];
    let closeBtnOK = document.getElementById('ChosenOK');
    let performers = document.querySelectorAll('#chosenUser option');
    var str="";

    for (var i = 0; i < performers.length; i++) {
      if (performers[i].selected) {
        str = performers[i].text;
        choosedUser.push(str);
      }
    }


    userChoose = choosedUser[0];
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    // User is chosen performing this part of code

    var closeBtn = document.getElementById('closeModalChooseUser');
    var modal = document.getElementsByClassName('modalChooseUser');
    var backdrop = document.querySelector('.backdrop');

    backdrop.style.display = 'none';

    backdrop.removeEventListener('click', this.f_closeModalChooseUser); //снимаем эти два слушателя

    closeBtn.removeEventListener('click', this.f_closeModalChooseUser); //с их функциями

    closeBtnOK.removeEventListener('click', this.f_closeModalChooseUser);

    modal[0].classList.remove('modalShowChooseUser');
    headerStartButton.removeEventListener('click', this.f_fillModalChooseUser);
    admin = new this.f_User(userChoose); // Creating user with constructor function f_User
    admin.load(this.state.dataMain);
    admin.freePersonalList();


    // filterAll.addEventListener('click', admin.filterAll);
    // filterDay.addEventListener('click', admin.filterDays);
    // filterWeek.addEventListener('click', admin.filterWeeks);
    // filterMonth.addEventListener('click', admin.filterMonths);

    let blockMain = document.querySelector(".blockMain");
    blockMain.style.height = 89 + "vh";


    //////////////////////////////////////////////////////////////////////////////
    /////In this block we define whether user has some incoming messages///////////
    ///////////////////////////////////////////////////////////////////////////////
    if (userChoose !== 'Manager') {
      f_preRead(userChoose);
    } else {
      let bufferPersonsData = window.localStorage.getItem('personsData');
      bufferPersonsData = JSON.parse(bufferPersonsData);
      let user = '';

      for (let c = 0; c < bufferPersonsData.length; c++) {
        console.log(bufferPersonsData[c].position)
        if (bufferPersonsData[c]['position'] == 'Manager') {

          // let loginedUserPhoto = document.querySelector(".blockMainLoginedUser");
          // let loginedUserName = document.querySelector("#logout p ");
          // loginedUserPhoto.style.backgroundImage = `url(${bufferPersonsData[c]['photo']})`;
          // loginedUserName.innerHTML = `${bufferPersonsData[c]['firstName']}`;	
          // console.log(loginedUserPhoto.style.backgroundImage);

          user = bufferPersonsData[c]['firstName'];

          break;
        }
      }
      f_preRead(user);
    }

    function f_preRead(user) {
      let messagesToUsers = null;
      let msgUsers = window.localStorage.getItem('messagesToUsers'); // During first load read data with tasks from local storage
      if (msgUsers == null) {
        window.localStorage.setItem('messagesToUsers', JSON.stringify(dataOuterMessages));
      } 
      messagesToUsers = window.localStorage.getItem('messagesToUsers');
      messagesToUsers = JSON.parse(messagesToUsers);

      let usersMsgBranches = Object.keys(messagesToUsers); // obtain ["Alex", "Andrew", "Stephanie", "Alex JR", "Anastacia", "Rita", "Elena", "Julia", "Mark", "George", "Egor"]
      let userMsgBranch = null;
      if (usersMsgBranches.length !== 0) {
        for (var i = 0; i < usersMsgBranches.length; i++) {
          if (user == usersMsgBranches[i]) {
            // search in usersMsgBranches index of user, under which we entered in Application
            userMsgBranch = usersMsgBranches[i]; // and storing this name in userMsgBranch
            break;
          }
        }
        //console.log(usersMsgBranches);
        let unreadMessages = []; // here we store user all unread messages
        let unreadMsg = {};
        if (userMsgBranch !== null) {
          let allUserMessages = Object.keys(messagesToUsers[userMsgBranch]); // messagesToUsers[indexUserMsg] - gives for example "Andrew"
          // in "Andrew" is stored object like ID: {}, ID: {}, ... , ID: {}
          // therefore we obtain [ ID, ID, ID, ... , ID ]
          allUserMessages.map((msg) => {
            if (messagesToUsers[userMsgBranch][msg]['Unread'] == true) {
              // messagesToUsers[userMsgBranch][msg]['Unread'] = false; // setting current message as already being read
              // unreadMsg['ID'] = msg;
              // unreadMsg['message'] = messagesToUsers[userMsgBranch][msg]['message'];

              unreadMessages.push(unreadMsg);
            }
          });
          console.log(unreadMessages); // !!! FINALLY WE GET ALL MESSAGES WHICH ARE UNREAD BY USER   !!!
          if (unreadMessages.length !== 0) {
            // alert('There is 1 message!');
            // If there are some unread messages we display envelope with quantity of unread messages
            let envelope = document.querySelector(".fa-envelope");
            let bubbleAlert = document.getElementById("blockMainHeaderLogout__MsgCounter");
            envelope.style.display = "block";
            envelope.addEventListener('click', admin.readMessage);
            bubbleAlert.innerHTML = unreadMessages.length;
            bubbleAlert.style.display = "flex";
            // console.log(unreadMessages);
          }
          // console.log(messagesToUsers);
        }
        //window.localStorage.setItem('messagesToUsers', JSON.stringify(messagesToUsers));
      //admin.readMessage(userChoose);
      }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////

    ////Scrolling to main block/////////////////////////


    let headerB = document.querySelector("header");

    let offset = headerB.offsetHeight - headerMenuScrollable.offsetHeight;             //
    window.scrollTo(0, offset);
  }

  f_signOut() {
    let logIn = document.getElementById('login');
    let logOut = document.getElementById('logout');
    let logOutSign = document.getElementById('logoutSign');
    logOutSign.removeEventListener('click', this.f_signOut);
    logOut.style.display = 'none';

    logIn.style.display = 'flex';

    let deleteN = document.getElementsByClassName('task'); // Gathering all tasks on the screen of old user
    for (var i = 0; i < deleteN.length; i++) {
      deleteN[i].parentNode.removeChild(deleteN[i]); // Removing them from the screen
      i--;
    }
    deleteN = null;

    let paginatorWrapper = document.querySelector(".paginatorWrapper");
    paginatorWrapper.parentNode.removeChild(paginatorWrapper);
    let viewTasksBlockwrapper = document.querySelector(".viewTasksBlockwrapper");
    viewTasksBlockwrapper.style.backgroundImage = `url('./img/SignIn.jpg')`;
    let blockMainHeaderMenu = document.querySelector(".blockMainHeader div:first-child");
    let blockMainHeaderTaskPeriod = document.querySelector("#blockMainHeaderTaskPeriod");
    let blockMainHeaderBackgroundText = document.querySelector(".blockMainHeaderBackgroundText");
    let blockMainHeader = document.querySelector(".blockMainHeader");
    blockMainHeaderMenu.style.display = "none";
    blockMainHeaderTaskPeriod.style.display = "none";
    blockMainHeaderBackgroundText.style.display = "flex";
    blockMainHeader.style.justifyContent = "center";
    admin.closeInfoModal();
  }

  ////////////////////////START LOADING//////////////////////////////////
  componentDidMount() {
    let logIn = document.getElementById('login');
    let logOut = document.getElementById('logout');
    let logOutSign = document.getElementById('logoutSign');
    logIn.style.display = 'none';
    logOut.style.display = 'flex';
    logOutSign.addEventListener('click', this.f_signOut);

    headerStartButton.addEventListener('click', this.f_fillModalChooseUser);
    this.f_fillModalChooseUser();

    this.setState({dataMain: dataMain});

    let btn = document.querySelector('#btn1');
    btn.addEventListener('click', function () {
      if (userChoose == 'Manager') {
        admin.openModalCreate();
      }
      admin.freePersonalList(); //Наполняем исходными данными диалоговое окно
    });
    f_hideMenu();
    f_buildSlider();
    // this.f_showDisplay(blocksViewed);
  }  
  


  f_User(user) {
    let personsD = [
      {
        firstName: 'Alex',
        secondName: 'Petrenko',
        gender: 'male',
        birthDate: '05/14/1996',
        contact: 'alexPet@gmail.com',
        tasks: [],
        photo: './img/photos/1.jpg',
        position: 'Leading engineer'
      },
      {
        firstName: 'Andrew',
        secondName: 'Kovalski',
        gender: 'male',
        birthDate: '05/21/1993',
        contact: 'andKoval@gmail.com',
        tasks: [],
        photo: './img/photos/3.jpg',
        position: 'Junior engineer'
      },
      {
        firstName: 'Stephanie',
        secondName: 'Muller',
        gender: 'female',
        birthDate: '05/21/1995',
        contact: 'stephanieMuller@gmail.com',
        tasks: [],
        photo: './img/photos/13.jpg',
        position: '3D Designer'
      },
      {
        firstName: 'AlexJR',
        secondName: 'Ivanek',
        gender: 'male',
        birthDate: '05/02/1995',
        contact: 'alIvan@gmail.com',
        tasks: [],
        photo: './img/photos/10.jpg',
        position: 'Junior engineer'
      },
      {
        firstName: 'Anastacia',
        secondName: 'Kovalenko',
        gender: 'female',
        birthDate: '05/07/1997',
        contact: 'stacia@gmail.com',
        tasks: [],
        photo: './img/photos/11.jpeg',
        position: 'Motion designer'
      },
      {
        firstName: 'Rita',
        secondName: 'Podkopajeva',
        gender: 'female',
        birthDate: '12/12/1994',
        contact: 'rPod@gmail.com',
        tasks: [],
        photo: './img/photos/4.jpg',
        position: 'Graphic assistant'
      },
      {
        firstName: 'Elena',
        secondName: 'Prokopchuk',
        gender: 'female',
        birthDate: '01/01/1995',
        contact: 'LenaPro@gmail.com',
        tasks: [],
        photo: './img/photos/5.jpg',
        position: 'Accountant'
      },
      {
        firstName: 'Julia',
        secondName: 'Lambrino',
        gender: 'female',
        birthDate: '03/03/1996',
        contact: 'JulietLambrino@gmail.com',
        tasks: [],
        photo: './img/photos/12.jpg',
        position: 'Designer'
      },
      {
        firstName: 'Mark',
        secondName: 'Thodzhinski',
        gender: 'male',
        birthDate: '09/05/1990',
        contact: 'MarkyMark@gmail.com',
        tasks: [],
        photo: './img/photos/7.jpg',
        position: '3D Architect'
      },
      {
        firstName: 'George',
        secondName: 'Muller',
        gender: 'male',
        birthDate: '10/01/1994',
        contact: 'gMuller@gmail.com',
        tasks: [],
        photo: './img/photos/8.jpg',
        position: 'Architect assistant'
      },
      {
        firstName: 'Stanislav',
        secondName: 'Kravchuk',
        gender: 'male',
        birthDate: '11/21/1995',
        contact: 'AndKrava@gmail.com',
        tasks: [],
        photo: './img/photos/9.jpg',
        position: 'Designer'
      },
      {
        firstName: 'Egor',
        secondName: 'Chernenko',
        gender: 'male',
        birthDate: '11/12/1986',
        contact: 'egorCher@gmail.com',
        tasks: [],
        photo: './img/photos/2.1.jpg',
        position: 'Manager'
      }
    ];
    let personsData = [];

    //************************************************************************************************ */
    //************************************************************************************************** */
    // If user=="Manager, in this piece of code we attach event listener to each block.
    // It is made for possibility to control this task (for example change it's status or priority, write messages to performer)
    // and also to get additional info - for example performer info, task additional info
    //******************************************************************************************************* */
    function f_showLoginedUser(userChoose) {

      let bufferPersonsData = window.localStorage.getItem('personsData');
      bufferPersonsData = JSON.parse(bufferPersonsData);


      if (userChoose == "Manager") {

        for (let c = 0; c < bufferPersonsData.length; c++) {
          // console.log(bufferPersonsData[c].position)
          if (bufferPersonsData[c]['position'] == 'Manager') {

            let loginedUserPhoto = document.querySelector(".blockMainLoginedUser");
            let loginedUserName = document.querySelector("#logout p ");
            loginedUserPhoto.style.backgroundImage = `url(${bufferPersonsData[c]['photo']})`;
            loginedUserName.innerHTML = `${bufferPersonsData[c]['firstName']}`;
            // console.log(loginedUserPhoto.style.backgroundImage);
            break;
          }

        }
      }
      else {
        for (let c = 0; c < bufferPersonsData.length; c++) {
          if (bufferPersonsData[c].firstName == userChoose) {

            let loginedUserPhoto = document.querySelector(".blockMainLoginedUser");
            let loginedUserName = document.querySelector("#logout p ");
            loginedUserPhoto.style.backgroundImage = `url(${bufferPersonsData[c]['photo']})`;
            loginedUserName.innerHTML = `${bufferPersonsData[c]['firstName']}`;
            // console.log(loginedUserPhoto.style.backgroundImage)
            break;
          }
        }
      }
    }

    function f_showLeftModal(event) {
      // This window shows user information

      let p1 = document.getElementById('modalInfoUserName');
      let p2 = document.getElementById('modalInfoUserAge');
      let p3 = document.getElementById('modalInfoUserContact');
      let p4 = document.getElementById('modalInfoUserTasks');
      let p5 = document.getElementById('modalInfoUserPosition');
      let p6 = document.getElementById('modalInfoUserTaskID');
      p1.innerHTML = ''; // Cleaning all forms
      p2.innerHTML = ''; // Cleaning all forms
      p3.innerHTML = ''; // Cleaning all forms
      p4.innerHTML = ''; // Cleaning all forms
      p5.innerHTML = ''; // Cleaning all forms
      p6.innerHTML = ''; // Cleaning all forms

      // This block shows necessary part of the window
      let modalInfoUser = document.querySelector('.modalInfoUser');
      modalInfoUser.style.display = 'flex';
      let modalInfoTask = document.querySelector('.modalInfoTask');
      modalInfoTask.style.display = 'none';
      let modal = document.querySelector('.modalInfo');
      modal.style.top = event.pageY + 'px';
      modal.style.left = event.pageX + 'px';
      modal.classList.add('modalInfoShow');
      let closer = document.querySelector('.modalInfoTaskCloser');
      closer.addEventListener('click', admin.closeInfoModal);


      let currentPerson = event.target.parentNode;
      let currP = '';
      currentPerson = currentPerson.childNodes;
      for (var i = 0; i < currentPerson.length; i++) {
        if (currentPerson[i].className == 'performerName') {
          currP = currentPerson[i].innerHTML;
        }
      }

      let bufferPersonsData = window.localStorage.getItem('personsData');
      bufferPersonsData = JSON.parse(bufferPersonsData);

      let temp = 0;

      for (var j = 0; j < bufferPersonsData.length; j++) {
        if (bufferPersonsData[j].firstName == currP) {

          p1.innerHTML = bufferPersonsData[j].firstName + ' ' + bufferPersonsData[j].secondName;

          let d = new Date(bufferPersonsData[j].birthDate);
          d = d.toString();
          let currD = new Date();
          currD = currD.toString();
          let age = dateDiffInDays(currD, d);
          age = Math.floor(age[4] / 31536000000)
          p2.innerHTML = age;
          p3.innerHTML = bufferPersonsData[j].contact;
          temp = j;

          p5.innerHTML = bufferPersonsData[j].position;
          break;
        }

      }
      for (var a = 0; a < bufferPersonsData[temp].tasks.length; a++) {
        p4.innerHTML += bufferPersonsData[temp].tasks[a]['taskname'];
        if (a != bufferPersonsData[j].tasks.length - 1) {
          p4.innerHTML += ', ';
        }
      }

      let blockID = event.target.parentNode.parentNode.parentNode;
      for (let k = 0; k < blockID.childNodes.length; k++) {
        if (blockID.childNodes[k].className == "blockID") {
          p6.innerHTML = blockID.childNodes[k].innerHTML;
          break;
        }
      }


      let modalInfoUserMsg = document.querySelector(".modalInfoUserMsg");
      let modalInfoUserMsgSend = document.querySelector(".modalInfoUserMsgSend");
      let modalInfoUserMsgTextarea = document.querySelector(".modalInfoUserTextarea");
      modalInfoUserMsg.addEventListener('click', function () {
        modalInfoUserMsg.classList.add("modalInfoUserMsgHide");
        modalInfoUserMsgSend.classList.add("modalInfoUserTextareaSendHide");
        modalInfoUserMsgTextarea.classList.add("modalInfoUserTextareaSendHide");

        modalInfoUserMsgSend.addEventListener('click', admin.writeMsgToUser);
      })
    }

    function f_showRightModal(event) {
      let projName = document.getElementById('modalInfoTaskProjectName');
      let employer = document.getElementById('modalInfoTaskEmployer');
      let descr = document.getElementById('modalInfoTaskDescription');
      let assDate = document.getElementById('modalInfoTaskAssD');
      let deadline = document.getElementById('modalInfoTaskDeadline');
      let estimated = document.getElementById('modalInfoTaskEstimated');
      projName.innerHTML = 'Project: '; // Cleaning all forms
      employer.innerHTML = ''; // Cleaning all forms
      descr.innerHTML = ''; // Cleaning all forms
      assDate.innerHTML = ''; // Cleaning all forms
      deadline.innerHTML = ''; // Cleaning all forms
      estimated.innerHTML = 'Estimated: '; // Cleaning all forms
      // console.log("event.screenY"+event.screenY);
      // console.log("window.innerHeight"+window.innerHeight);

      let modalInfoTask = document.querySelector('.modalInfoTask');
      modalInfoTask.style.display = 'flex';
      let modalInfoUser = document.querySelector('.modalInfoUser');
      modalInfoUser.style.display = 'none';
      let modal = document.querySelector('.modalInfo');
      // if (event.screenY>(window.innerHeight/2)) {
      // console.log('1')
      // modal.style.bottom = event.pageY + 'px';
      // modal.style.right = event.pageX - modal.offsetWidth + 'px';
      // }
      // else {
      // console.log('2')
      modal.style.top = event.pageY + 'px';
      modal.style.left = event.pageX - modal.offsetWidth + 'px';
      // }

      modal.classList.add('modalInfoShow');
      let closer = document.querySelector('.modalInfoTaskCloser');
      closer.addEventListener('click', admin.closeInfoModal);

      let ID = null;
      let temp = '';
      //console.log(event.target.parentNode.parentNode);
      let block = event.target.parentNode.parentNode;
      for (var i = 0; i < block.childNodes.length; i++) {
        if (block.childNodes[i].className == 'blockID') {
          ID = block.childNodes[i].innerHTML;
        }
        if (block.childNodes[i].className == 'blockMainStatusWrapper') {
          for (var j = 0; j < block.childNodes[i].childNodes.length; j++) {
            if (block.childNodes[i].childNodes[j].className == 'blockMainStatus') {
              //status = block.childNodes[i].childNodes[j].innerHTML;
            }
          }
        }
      }

      let dataMain = window.localStorage.getItem('dataMain');
      dataMain = JSON.parse(dataMain);

      for (var k = 0; k < dataMain.length; k++) {
        for (var c = 0; c < dataMain[k]['subTask'].length; c++) {
          if (dataMain[k]['subTask'][c]['taskID'] == ID) {
            temp = projName.innerHTML;
            projName.innerHTML = `${temp} ${dataMain[k]['ProjectName']}`;
            employer.innerHTML = `${dataMain[k]['subTask'][c]['employer']}`;
            descr.innerHTML = `${dataMain[k]['subTask'][c]['description']}`;
            let temp2 = new Date(dataMain[k]['subTask'][c]['assignmentDate']);
            temp2 = temp2.toLocaleString();
            assDate.innerHTML = `${temp2}`;
            temp2 = new Date(dataMain[k]['subTask'][c]['subTaskDeadline']);
            temp2 = temp2.toLocaleString();
            deadline.innerHTML = `${temp2}`;

            let currD = new Date();
            currD = currD.toString();
            let diff = admin.calcDateDiffInDays(dataMain[k]['subTask'][c]['subTaskDeadline'], currD);
            diff = diff[4];

            if (diff < 0) {
              console.log(diff);
              estimated.innerHTML = 'FINISHED';
            } else {
              diff = admin.calcDateDiffInDays(dataMain[k]['subTask'][c]['subTaskDeadline'], currD);

              if (diff[4] > 86400000) {
                estimated.innerHTML += `${diff[0]} days ${diff[1]} hours ${diff[2]} minutes `;
              }
              if (diff[4] < 86400000) {
                estimated.innerHTML += `${diff[1]} hours ${diff[2]} minutes `;
              }
            }
            break;
          }
        }
      }
    }

    function f_closeModal() {
      let modalInfoUser = document.querySelector('.modalInfoUser');
      modalInfoUser.style.display = 'none';
      let modalInfoTask = document.querySelector('.modalInfoTask');
      modalInfoTask.style.display = 'none';
      let closer = document.querySelector('.modalInfoTaskCloser');
      closer.removeEventListener('click', admin.closeInfoModal);

      let m = document.querySelector('.modalInfo');
      m.classList.remove('modalInfoShow');

      ////////////////////////////////////////////////////////////////////////
      // Прячем поле ввода сообщения
      let modalInfoUserMsg = document.querySelector(".modalInfoUserMsg");
      let modalInfoUserMsgSend = document.querySelector(".modalInfoUserMsgSend");
      let modalInfoUserMsgTextarea = document.querySelector(".modalInfoUserTextarea");
      modalInfoUserMsgTextarea.value = "";  // Cleaning previous message
      modalInfoUserMsg.classList.remove("modalInfoUserMsgHide");
      modalInfoUserMsgSend.classList.remove("modalInfoUserTextareaSendHide");
      modalInfoUserMsgTextarea.classList.remove("modalInfoUserTextareaSendHide");
      modalInfoUserMsgSend.removeEventListener('click', admin.writeMsgToUser);
      ////////////////////////////////////////////////////////////////////////


    }
    //************************************************************************************************ */
    //************************************************************************************************** */
    //************************************************************************************************** */

    function dateDiffInDays(a, b) {
      // Discard the time and time-zone information.
      // a and b are javascript Date objects

      let currDate = new Date(a);
      let assD = new Date(b);

      const utc1 = Date.UTC(currDate.getFullYear(), currDate.getMonth(), currDate.getDate());
      const utc2 = Date.UTC(assD.getFullYear(), assD.getMonth(), assD.getDate());

      var diff = Math.floor((utc2 - utc1) / _MS_PER_DAY);

      diff = currDate.getTime() - assD.getTime();
      var diffMs = diff;

      var daysDifference = Math.floor(diff / 1000 / 60 / 60 / 24);
      diff -= daysDifference * 1000 * 60 * 60 * 24;

      var hoursDifference = Math.floor(diff / 1000 / 60 / 60);
      diff -= hoursDifference * 1000 * 60 * 60;

      var minutesDifference = Math.floor(diff / 1000 / 60);
      diff -= minutesDifference * 1000 * 60;

      var secondsDifference = Math.floor(diff / 1000);

      diff =
        'difference = ' +
        daysDifference +
        ' day/s ' +
        hoursDifference +
        ' hour/s ' +
        minutesDifference +
        ' minute/s ' +
        secondsDifference +
        ' second/s ';

      return [daysDifference, hoursDifference, minutesDifference, secondsDifference, diffMs, diff];
    }

    function f_load(data) {
      personsData = window.localStorage.getItem('personsData'); // Diring first load read data with tasks from local storage
      if (personsData == null) {
        // If there is no data yet then we store some default dataMain
        window.localStorage.setItem('personsData', JSON.stringify(personsD)); // and store it in localStorage. In further we will work with this data - adding or removing some tasks
        personsData = window.localStorage.getItem('personsData');
        personsData = JSON.parse(personsData);
      } else {
        personsData = JSON.parse(personsData); // if data is present in localStarage then parsing and saving it in variable to work with it in application
      }

      f_showLoginedUser(userChoose);

      // Iterating on our task information
      // extracting its assD and endD
      let objTask = [];
      let objTaskUser = [];
      let sub = null;
      for (let i = 0; i < data.length; i++) {
        sub = data[i].subTask;
        for (var j = 0; j < sub.length; j++) {
          objTask.push(sub[j]);
        }
      }
      if (user == 'Manager') {
        objTaskUser = [...objTask];
      } else {
        objTask.map((obj) => {
          if (obj['name'] == user) {
            objTaskUser.push(obj);
          }
        });
      }
      f_launchTask(objTaskUser);

    }

    function f_addBlock(obj) {

      let blockProgressArr = [];
      let wrapper = document.querySelector('.viewTasksBlockwrapper');
      let bufferPersonsData = window.localStorage.getItem('personsData');
      let blockStatusRiseText = "";
      let blockProgress = null;
      bufferPersonsData = JSON.parse(bufferPersonsData);

      for (var i = 0; i < obj.length; i++) {
        let blockTask = document.createElement('div');
        blockTask.className = 'task';
        blockTask.classList.add("taskViewed");
        blockTask.classList.add("container-fluid");
        blockTask.classList.add("pl-0");
        blockTask.classList.add("pr-0");
          

        let blockPerformers = document.createElement('div');
        blockPerformers.className = 'performers';
        let textName = '';

        for (var j = 0; j < obj[i].name.length; j++) {
          var blockPerformer = document.createElement('div');
          blockPerformer.className = 'performer';
          var blockPerformerLogo = document.createElement('div');
          blockPerformerLogo.className = 'performerLogo';

          if (user == 'Manager') {
            for (var c = 0; c < bufferPersonsData.length; c++) {
              if (bufferPersonsData[c].firstName == obj[i].name[0]) {

                blockPerformerLogo.style.backgroundImage = `url(${bufferPersonsData[c]['photo']})`;
              }
            }
          } else {
            for (var c = 0; c < bufferPersonsData.length; c++) {
              if (bufferPersonsData[c].firstName == 'Egor') {

                blockPerformerLogo.style.backgroundImage = `url(${bufferPersonsData[c]['photo']})`;
              }
            }
          }

          blockPerformerLogo.addEventListener('click', admin.showLeftModal);
          blockPerformer.appendChild(blockPerformerLogo);
          var blockPerformerName = document.createElement('div');
          blockPerformerName.className = 'performerName';

          if (user == 'Manager') {
            textName = document.createTextNode(obj[i].name[j]);
          } else {
            textName = document.createTextNode('Egor');
          }

          blockPerformerName.appendChild(textName);
          blockPerformer.appendChild(blockPerformerName);
          blockPerformers.appendChild(blockPerformer);
          f_employeeWork(obj[i].name[j]); // Отправляем человека в регистр work
        }

        blockTask.appendChild(blockPerformers);

        let blockID = document.createElement('div');
        blockID.className = 'blockID';
        let blockIDText = document.createTextNode(obj[i].taskID);
        blockID.appendChild(blockIDText);
        blockTask.appendChild(blockID);

        let blockTaskInfo = document.createElement('div');
        blockTaskInfo.className = 'taskInfo';
        let blockTaskInfoName = document.createElement('div');
        blockTaskInfoName.className = 'taskInfoName';
        blockTaskInfoName.innerHTML = obj[i].taskname;
        let blockTaskInfoDate = document.createElement('div');
        blockTaskInfoDate.className = 'taskInfoDate';
        let deadline = new Date(obj[i].subTaskDeadline);
        deadline = deadline.toUTCString();
        blockTaskInfoDate.innerHTML = `${deadline}`;
        blockTaskInfo.appendChild(blockTaskInfoName);
        blockTaskInfo.appendChild(blockTaskInfoDate);
        blockTask.appendChild(blockTaskInfo);

        let blockStatusWrapper = document.createElement('div');
        blockStatusWrapper.className = 'blockMainStatusWrapper';

        if (user == 'Manager') {
          // This block we add only if user is Manager
          let blockStatusRise = document.createElement('div');
          blockStatusRise.className = 'blockMainStatusRise';
          blockStatusRiseText = document.createTextNode('Rise');
          blockStatusRise.appendChild(blockStatusRiseText);
          blockStatusRise.addEventListener('click', admin.riseStatus); // adding listener that gives opportunity to rise status
          blockStatusWrapper.appendChild(blockStatusRise);
        }

        let blockStatus = document.createElement('div');
        blockStatus.className = 'blockMainStatus';
        let blockStatusText = document.createTextNode(obj[i].status);
        blockStatus.appendChild(blockStatusText);

        blockStatusWrapper.appendChild(blockStatus);
        blockTask.appendChild(blockStatusWrapper);

        blockProgress = document.createElement('div');
        blockProgress.className = 'progress';
        let blockProgressLevel = document.createElement('div');
        blockProgressLevel.className = 'progressLevel';
        let text2 = document.createTextNode('0');
        blockProgressLevel.appendChild(text2);

        let blockProgressInfo = document.createElement('div');
        blockProgressInfo.className = 'progressInfo';
        blockProgressInfo.innerHTML = "<i class='fas fa-info-circle'></i>";

        blockProgressInfo.addEventListener('click', admin.showRightModal);

        
        blockProgress.appendChild(blockProgressLevel);

        blockTask.appendChild(blockProgress);
        blockTask.appendChild(blockProgressInfo);

        // Adding to invisible block common information
        //             Project name
        //             End date

        wrapper.appendChild(blockTask);
        blockProgressArr.push(blockTask);
      }

      return blockProgressArr;
    }

    function f_removeBlock() {
      // removeEventListener from this block!!!
    }

    function f_launchTask(objTask) {

      let block = f_addBlock(objTask);

      let blockProgress = []; // Here we store blockProgress elements from each task to follow progress and fill them according to progress of each task
      for (let i = 0; i < block.length; i++) {
        for (let k = 0; k < block[i].childNodes.length; k++) {
          for (let g = 0; g < block[i].childNodes[k].childNodes.length; g++) {
            if (block[i].childNodes[k].childNodes[g].className == 'progressLevel') {
              blockProgress.push(block[i].childNodes[k].childNodes[g]);
            }
          }
        }
      }

      ///////////////////////////////////////////////////////////////

      ///////////////////////////////////////////////////////////////

      let bufferPersonsData = window.localStorage.getItem('personsData');
      bufferPersonsData = JSON.parse(bufferPersonsData);

      for (let j = 0; j < blockProgress.length; j++) {
        let progress = 0;

        let date = new Date();
        let currD = date.toString(); // here we have to read current Date and store it in currD
        

        //***********************************************************
        //***********PART1***************************************** */
        //This part checks whether task is finished already
        let diff = dateDiffInDays(objTask[j].subTaskDeadline, currD);
        diff = diff[4];

        if (diff < 0) {
          //If diff<0 we jump to next iteration
          blockProgress[j].innerHTML = '100%';
          for (var f = 0; f < objTask[j].name.length; f++) {
            f_employeeFree(objTask[j].name[f], blockProgress[j]); // Отправляем человека в регистр free когда он закончил задание
          }
          f_statusDefine(objTask[j]['taskID'], 'Finished');
          continue;
        }

        //********************************************************************* */
        // If task is still being performed we store it in personsData tasks
        let encounter = 0;
        for (var h = 0; h < bufferPersonsData.length; h++) {
          if (bufferPersonsData[h]['firstName'] == objTask[j]['name']) {
            if (bufferPersonsData[h]['tasks'].length != 0) {
              for (var q = 0; q < bufferPersonsData[h]['tasks'].length; q++) {
                if (bufferPersonsData[h]['tasks'][q]['taskID'] == objTask[j]['taskID']) {
                  encounter++;
                  break;
                }
              }
            } else {
              bufferPersonsData[h]['tasks'].push(objTask[j]);
              encounter++;
              break;
            }
          }
        }
        if (encounter == 0) {
          for (var p = 0; p < bufferPersonsData.length; p++) {
            if (bufferPersonsData[p]['firstName'] == objTask[j]['name']) {
              bufferPersonsData[p]['tasks'].push(objTask[j]);
            }
          }
        }
        
        //***********************************************************

        //***********This block calculates what progress does this task have already */
        diff = dateDiffInDays(currD, objTask[j].assignmentDate);
        diff = diff[4];
        

        let taskPeriod = dateDiffInDays(objTask[j].subTaskDeadline, objTask[j].assignmentDate);
        if (diff != 0) {
          taskPeriod = taskPeriod[4];
          
          progress = Math.round(diff / taskPeriod * 100); // если окажется, что текущее время больше assD, то вычисляем какой прогресс выполнения таски
        } else {
          progress = blockProgress[j].innerHTML; // default value 0
        }
        
        progress = parseInt(progress);
        blockProgress[j].innerHTML = progress + '%';
        //***********************************************************

        //***********************************************************
        //Calculating step interval

        let step = null;
        let estimated = null;

        estimated = dateDiffInDays(objTask[j].subTaskDeadline, currD);
        estimated = estimated[4];
        step = Math.round(estimated / (100 - progress));

        
        if (progress >= 5 && progress < 50 && objTask[j].status != 'Preprogress') {
          f_statusDefine(objTask[j]['taskID'], 'Preprogress');
        }

        if (progress >= 50 && progress < 90 && objTask[j].status != 'In Progress') {
          f_statusDefine(objTask[j]['taskID'], 'In Progress');
        }

        if (progress >= 90 && progress < 90 && objTask[j].status != 'Testing') {
          f_statusDefine(objTask[j]['taskID'], 'Testing');
        }

        function f_statusDefine(id, status) {
          let relaunchTask = [];
          let data = window.localStorage.getItem('dataMain');
          data = JSON.parse(data);

          let temp = [];

          let sub = null;
          for (let i = 0; i < data.length; i++) {
            sub = data[i].subTask;
            for (var j = 0; j < sub.length; j++) {
              if (sub[j]['taskID'] == id) {
                relaunchTask.push(sub[j]);
                temp.push(i);
                temp.push(j);
                break;
              }
            }
            if (relaunchTask.length != 0) {
              break;
            }
          }

          data[temp[0]].subTask[temp[1]]['status'] = status;

          window.localStorage.setItem('dataMain', JSON.stringify(data)); // and store new dataMain it in localStorage

          let neededBlock = null;
          let blocks = document.querySelectorAll('.task');
          for (var z = 0; z < blocks.length; z++) {
            for (var b = 0; b < blocks[z].childNodes.length; b++) {
              if (blocks[z].childNodes[b].className == 'blockID') {
                if (blocks[z].childNodes[b].innerHTML == id) {
                  neededBlock = blocks[z];
                  break;
                }
              }
            }
          }

          let buffer = null;

          for (var a = 0; a < neededBlock.childNodes.length; a++) {
            if (neededBlock.childNodes[a].className == 'blockMainStatusWrapper') {
              buffer = neededBlock.childNodes[a];
              for (var b = 0; b < buffer.childNodes.length; b++) {
                if (buffer.childNodes[b].className == 'blockMainStatus') {
                  buffer.childNodes[b].innerHTML = status;
                }
              }
            }
          }
        }

        let id = null;
        for (var b = 0; b < block[j].childNodes.length; b++) {
          if (block[j].childNodes[b].className == 'blockID') {
            id = block[j].childNodes[b].innerHTML;
            id = parseInt(id);
            break;
          }
        }

        //***********************************************************

        // Launching performing timer on block-task
        let timerId = setInterval(function () {
          let _id = id;

          if (progress == 5) {
            f_riseStatus(_id);
          }

          if (progress == 50) {
            f_riseStatus(_id);
          }

          if (progress == 90) {
            f_riseStatus(_id);
          }

          if (progress > 99) {
            clearInterval(timerId);
            let neededBlock = null;
            let blockSend = null;
            let blocks = document.querySelectorAll('.task');
            for (var z = 0; z < blocks.length; z++) {
              for (var b = 0; b < blocks[z].childNodes.length; b++) {
                if (blocks[z].childNodes[b].className == 'blockID') {
                  if (blocks[z].childNodes[b].innerHTML == _id) {
                    neededBlock = blocks[z];
                    // console.log(neededBlock);
                    break;
                  }
                }
              }
            }

            for (let k = 0; k < neededBlock.childNodes.length; k++) {
              for (let g = 0; g < neededBlock.childNodes[k].childNodes.length; g++) {
                if (neededBlock.childNodes[k].childNodes[g].className == 'progressLevel') {
                  neededBlock.childNodes[k].childNodes[g].innerHTML = progress + "%";
                  blockSend = neededBlock.childNodes[k].childNodes[g];
                  // console.log(blockSend);
                  break;
                }
              }
            }

            blockSend.style.backgroundColor = 'green';

            ///////////////////////////////////////////////////////
            // When task is finished we delete from person tasks
            let bufferPersonsData = window.localStorage.getItem('personsData');
            bufferPersonsData = JSON.parse(bufferPersonsData);

            for (var h = 0; h < bufferPersonsData.length; h++) {
              for (var f = 0; f < bufferPersonsData[h]['tasks'].length; f++) {
                if (bufferPersonsData[h]['tasks'][f].taskID == _id) {
                  bufferPersonsData[h]['tasks'].splice(f, 1);
                }
              }
            }
            window.localStorage.setItem('personsData', JSON.stringify(bufferPersonsData));
            ////////////////////////////////////////////////////////

            for (var p = 0; p < objTask[j].name.length; p++) {
              f_employeeFree(objTask[j].name[p], blockSend); // Отправляем человека в регистр free когда он закончил задание
              
            }

            f_freePersonalList();
          } else {
            f_progressIncrease();
          }
          function f_progressIncrease() {
            let neededBlock = null;
            let blocks = document.querySelectorAll('.task');
            for (var z = 0; z < blocks.length; z++) {
              for (var b = 0; b < blocks[z].childNodes.length; b++) {
                if (blocks[z].childNodes[b].className == 'blockID') {
                  if (blocks[z].childNodes[b].innerHTML == _id) {
                    neededBlock = blocks[z];
                    // console.log(neededBlock);
                    break;
                  }
                }
              }
            }

            for (let k = 0; k < neededBlock.childNodes.length; k++) {
              for (let g = 0; g < neededBlock.childNodes[k].childNodes.length; g++) {
                if (neededBlock.childNodes[k].childNodes[g].className == 'progressLevel') {
                  neededBlock.childNodes[k].childNodes[g].innerHTML = progress + '%';
                }
              }
            }
          }
          function f_riseStatus(_id) {
            // let block = document.querySelectorAll(".task");              // Finding which block we are now on
            
            let temp2 = [];

            let relaunchTask = [];
            let data = window.localStorage.getItem('dataMain');
            data = JSON.parse(data);

            let temp = [];

            let sub = null;
            for (let i = 0; i < data.length; i++) {
              sub = data[i]["subTask"];
              for (var j = 0; j < sub.length; j++) {
                if (sub[j]['taskID'] == id) {
                  relaunchTask.push(sub[j]);
                  temp.push(i);
                  temp.push(j);
                  temp.push(sub[j]['status']);
                  break;
                }
              }
              if (relaunchTask.length != 0) {
                break;
              }
            }
            for (var s = 0; s < statuses.length; s++) {
              if (statuses[s] == temp[2]) {
                temp2 = statuses.slice(s, s + 2);
                data[temp[0]]["subTask"][temp[1]]['status'] = temp2[1];
                break;
              }
            }
            console.log(temp2);
            window.localStorage.setItem('dataMain', JSON.stringify(data)); // and store new dataMain it in localStorage

            let buffer = null;

            let neededBlock = null;
            let blocks = document.querySelectorAll('.task');
            for (var z = 0; z < blocks.length; z++) {
              for (var b = 0; b < blocks[z].childNodes.length; b++) {
                if (blocks[z].childNodes[b].className == 'blockID') {
                  if (blocks[z].childNodes[b].innerHTML == _id) {
                    neededBlock = blocks[z];
                    // console.log(neededBlock);
                    break;
                  }
                }
              }
            }

            for (var a = 0; a < neededBlock.childNodes.length; a++) {
              if (neededBlock.childNodes[a].className == 'blockMainStatusWrapper') {
                buffer = neededBlock.childNodes[a];
                for (var b = 0; b < buffer.childNodes.length; b++) {
                  if (buffer.childNodes[b].className == 'blockMainStatus') {
                    buffer.childNodes[b].innerHTML = temp2[1];
                  }
                }
              }
            }
          }
          progress++;
        }, step);
      }
      window.localStorage.setItem('personsData', JSON.stringify(bufferPersonsData));
      //this.f_showDisplay(blocksViewed).bind(this);
    }

    function f_freePersonalList() {
      var temp = null;
      temp = document.querySelectorAll('.modal .createTaskBlockList select');

      
      if (temp.length !== 0) {
        for (var i = 0; i < temp.length; i++) {
          temp[i].remove();
        }
      }

      let taskBlockList = document.querySelectorAll('.createTaskBlockList');
      taskBlockList = Array.from(taskBlockList);

      for (var i = 0; i < taskBlockList.length; i++) {
        var select = document.createElement('select');
        select.setAttribute('size', '11');
        select.setAttribute('name', 'Personal');
        select.multiple = true;
        select.required = true;

        if (freePersons.length != 0) {
          let optgr = document.createElement('optgroup');
          optgr.setAttribute('label', 'Free personal');
          let opt = null;
          for (var j = 0; j < freePersons.length; j++) {
            opt = document.createElement('option');
            opt.setAttribute('value', freePersons[j]);
            temp = document.createTextNode(freePersons[j]);
            opt.appendChild(temp);
            optgr.appendChild(opt);
          }
          select.appendChild(optgr);
        }
        if (workingPersons.length != 0) {
          let optgr = document.createElement('optgroup');
          optgr.setAttribute('label', 'Working personal');
          let opt = null;
          for (var k = 0; k < workingPersons.length; k++) {
            opt = document.createElement('option');
            opt.setAttribute('value', workingPersons[k]);
            temp = document.createTextNode(workingPersons[k]);
            opt.appendChild(temp);
            optgr.appendChild(opt);
          }
          select.appendChild(optgr);
        }

        taskBlockList[i].appendChild(select);

      }
    }

    function f_employeeWork(person) {
      //Эта функция перемещает человека из регистра free в регистр work
      let temp = '';
      for (var k = 0; k < freePersons.length; k++) {
        if (person == freePersons[k]) {
          temp = freePersons.splice(k, 1);
          workingPersons.push(temp);
        }
      }
    }

    function f_employeeFree(person, block) {
      //Эта функция перемещает человека из регистра work в регистр free
      
      let temp = '';
      temp = block.parentNode.children[0].innerHTML;
      for (var k = 0; k < workingPersons.length; k++) {
        if (person == workingPersons[k]) {
          temp = workingPersons.splice(k, 1);
          freePersons.push(temp);
        }
      }
    }

    //****************************************************************************************************************************** */
    //******************************  MODAL DIALOG WINDOW   ************************************************************************ */
    //****************************************************************************************************************************** */

    let closeBtn = document.getElementById('closeModal');
    let modal = document.getElementsByClassName('modal');
    let backdrop = document.querySelector('.backdrop');

    /////////////////////////////////////////////////////////////////////////////
    ///////////////////CREATING TASK LOGIC IN MODAL WINDOW///////////////////////
    /////////////////////////////////////////////////////////////////////////////
    
    document.querySelector(".createTaskBlockConfirmCancel").addEventListener('click', function() {
      f_clear();
    })

    function f_clear() {
      document.getElementById("taskName").value = "";
      document.getElementById("employer").value = "";
      document.getElementById("subTaskDatepickerEndDate").value = "";
      document.getElementById("subTaskEndTimePicker").value = "";
      document.getElementById("subTaskDescription").value = "";
    }

    function f_window() {
      backdrop.style.display = 'block'; //ставим фон диал.окна
      modal[0].classList.add('modalShow'); //делаем видимым диал.окно

      f_closeBlockMainSideMenu(); // Closing blockMainSideMenu

      backdrop.addEventListener('click', f_close);
      

      closeBtn.addEventListener('click', f_close);

      document
        .getElementsByClassName('createTaskBlockConfirmCreate')[0]
        .addEventListener('click', f_createSubTaskInModal); //Кнопка CREATE
      document
        .getElementsByClassName('createTaskBlockCreateProjectBtnAddMoreTaskBtn')[0]
        .addEventListener('click', f_addSubTaskInModal); //Button ADD MORE TASK
      document.getElementsByClassName('createProjectBtn')[0].addEventListener('click', f_finishCreatingProject); //Button CREATE PROJECT
      modal[0].addEventListener('click', f_validationCheck); // this event listener is aimed
      modal[0].addEventListener('keyup', f_validationCheck); // to check validity each time when user enters
      // task data. If data is valid and all fields are filled
      // with info then button create task becomes enabled
    }

    function f_createSubTaskInModal() {
      // Как только мы создали таску нужно дективировать вторую вкладку (PROJECT или SINGLETASK)
      // Чтобы по-дурости туда не полезть и не задать там еще задание
      if (document.querySelector('#project').checked) {
        // смотрим какая вкладка была активна до нажатия CREATE
        document.querySelector('#singleTask').disabled = true;

        let createTaskBlock = document.querySelector('.createTaskBlock'); //Как только нажали CREATE, прячем блок заполнения задания createTaskBlock
        createTaskBlock.classList.add('createTaskBlockHide'); //При работе с вкладкой SINGLE TASK прятать его бессмысленно

        let addMoreTaskButton = document.querySelector('.createTaskBlockCreateProjectBtnAddMoreTask'); //если мы находимся на вкладке project
        addMoreTaskButton.style.display = 'block'; // то делаем активной кнопку AddMoreTask

        let createTaskBlockCreateProjectBtn = document.querySelector('.createTaskBlockCreateProjectBtn'); //если мы находимся на вкладке project
        createTaskBlockCreateProjectBtn.style.display = 'block'; // то делаем активной кнопку CREATE PROJECT

        let referenceElt = document.getElementsByClassName('createTaskBlock');
        let readySubTaskModal = document.createElement('div'); // Это то зеленое поле, которое виглыдит как назначенное задние
        readySubTaskModal.className = 'createTaskHeader'; // Его есть смысл отображать только если мы находимся на вкладке PROJECT
        let parent = document.querySelector('.createTask');
        f_bufferSubTaskInModal(); //каждую созданную субтаску проекта помещаем в буффер tasksCreatedBuffer

        let temp = document.querySelector('#taskName');
        temp = temp.value;
        readySubTaskModal.innerHTML = temp; // Название созданной субтаски записываем в блок createTaskHeader                                                     // Считваем название созданной субтаски

        parent.insertBefore(readySubTaskModal, referenceElt[0]);

        document.querySelector('.createTaskBlock').classList.remove('createTaskBlockSuper'); // Этот блок прячет блок objectTaskBlock
      }

      if (document.querySelector('#singleTask').checked) {
        // смотрим какая вкладка была активна до нажатия CREATE
        f_bufferSubTaskInModal();
        f_finishCreatingProject();
      }
    }

    function f_validationCheck() {
      let dataCollection = document.querySelectorAll('.createTaskBlockData input');
      let valCheckCounter = 0;
      let validationsAmount = 0;
      let temp = [];
      for (var i = 0; i < dataCollection.length; i++) {
        validationsAmount++;
        if (dataCollection[i].checkValidity()) {
          valCheckCounter++;
        }
      }
      dataCollection = document.querySelectorAll('.createTaskBlockList select option');

      validationsAmount++;
      for (var j = 0; j < dataCollection.length; j++) {
        if (dataCollection[j].selected) {
          temp.push(dataCollection[j]);
        }
      }
      if (temp.length != 0) {
        valCheckCounter++;
      }

      dataCollection = document.querySelectorAll('.createTaskBlockData textarea');
      for (var k = 0; k < dataCollection.length; k++) {
        validationsAmount++;
        if (dataCollection[k].value.length != 0 && dataCollection[k].value != '') {
          valCheckCounter++;
        }
      }
      if (valCheckCounter == validationsAmount) {
        document.querySelector('.createTaskBlockConfirmCreate').removeAttribute('disabled');
        document.querySelector('.createTaskBlockConfirmCreate').classList.remove('createTaskBlockConfirmCreateDeactivated');
      } else {
        document.querySelector('.createTaskBlockConfirmCreate').setAttribute('disabled', 'true');
      }
    }

    function f_addSubTaskInModal() {
      let addMoreTaskButton = document.querySelector('.createTaskBlockCreateProjectBtnAddMoreTask'); //Прячем кнопку Add more task
      addMoreTaskButton.style.display = 'none';
      let createTaskBlockCreateProjectBtn = document.querySelector('.createTaskBlockCreateProjectBtn'); //Пряяем кнопку CREATE PROJECT
      createTaskBlockCreateProjectBtn.style.display = 'none';
      let createTaskBlock = document.querySelector('.createTaskBlock');
      createTaskBlock.classList.remove('createTaskBlockHide');
      document.querySelector('.createTaskBlock').classList.add('createTaskBlockSuper'); // Этот блок прячет блок objectTaskBlock
    }

    function f_bufferSubTaskInModal() {
      let taskBuffer = {};
      let d = new Date();
      let str = "";

      taskBuffer['finishedStatus'] = 0;
      taskBuffer['name'] = f_name();
      taskBuffer['task'] = f_task();
      taskBuffer['taskname'] = f_taskName();
      taskBuffer['assignmentDate'] = d.toString();
      taskBuffer['subTaskDeadline'] = f_deadline();
      taskBuffer['status'] = 'Sketching';
      taskBuffer['free'] = 1;
      taskBuffer['groupPriority'] = 1;
      taskBuffer['perfGroupPrior'] = 1;
      taskBuffer['await'] = 0;
      taskBuffer['parallel'] = 1;
      taskBuffer['employer'] = f_employer();
      taskBuffer['description'] = f_description();
      taskBuffer['taskID'] = d.getTime();

      function f_name() {
        let performers = document.querySelectorAll('.createTaskBlockList select option');

        for (var i = 0; i < performers.length; i++) {
          let temp = [];
          for (var i = 0; i < performers.length; i++) {
            if (performers[i].selected) {
              str = performers[i].text;
              temp.push(str);
            }
          }
          return temp;
        }
      }
      function f_task() {
        if (document.getElementById('project').checked) {
          
          return document.getElementById('projectNameID').value;
        }
        if (document.getElementById('singleTask').checked) {
          
          return document.getElementById('taskName').value;
        }
      }
      function f_taskName() {
        
        return document.getElementById('taskName').value;
      }
      function f_deadline() {
        let str =
          document.getElementById('subTaskDatepickerEndDate').value +
          ' ' +
          document.getElementById('subTaskEndTimePicker').value +
          ':00 GMT+0200';
        let d = new Date(str);
        str = d.toString();
        return str;
      }
      
      function f_employer() {
        
        return document.getElementById('employer').value;
      }
      function f_description() {
        
        return document.getElementById('subTaskDescription').value;
      }
      tasksCreatedBuffer[taskBuffer['taskID']] = taskBuffer;
    }

    function f_finishCreatingProject() {
      let dataMain = window.localStorage.getItem('dataMain'); // Reading data with tasks to fill it with new tasks
      dataMain = JSON.parse(dataMain);

      
      let readyProject = {};
      let readyProjectFinalize = [];

      if (document.getElementById('singleTask').checked) {
        // это для случая когда активирована вкладка singleTask и больше одной субтаски мы создыть не можем
        
        for (i in tasksCreatedBuffer) {
          readyProject['ProjectName'] = tasksCreatedBuffer[i]['task'];
          readyProject['projectDeadline'] = tasksCreatedBuffer[i]['subTaskDeadline'];
          readyProject['subTask'] = [];
          readyProject['subTask'].push(tasksCreatedBuffer[i]);
        }
        
        readyProjectFinalize.push(readyProject);
        tasksCreatedBuffer = []; // очищаем главный буфер все создынных тасок
        f_load(readyProjectFinalize);
        dataMain.push(readyProject);
        window.localStorage.setItem('dataMain', JSON.stringify(dataMain)); // Loading in localStarage the last up-to-date dataMain info (tasks)

        document.querySelector('.createTaskBlockConfirmCreate').classList.add('createTaskBlockConfirmCreateDeactivated');
        f_close();
      }

      if (document.getElementById('project').checked) {
        // это для случая когда активирована вкладка Project и мы можем создать много субтасок
        
        readyProject['ProjectName'] = document.getElementById('projectNameID').value;
        readyProject['projectDeadline'] = document.getElementById('projectEndDatepicker').value;
        readyProject['subTask'] = [];

        for (var i in tasksCreatedBuffer) {
          readyProject['subTask'].push(tasksCreatedBuffer[i]);
        }

        tasksCreatedBuffer = []; // очищаем главный буфер всех создынных тасок
        readyProjectFinalize.push(readyProject);
        
        f_load(readyProjectFinalize);
        dataMain.push(readyProject);
        window.localStorage.setItem('dataMain', JSON.stringify(dataMain)); // Loading in localStarage the last up-to-date dataMain info (tasks)

        document.querySelector('.createTaskBlockConfirmCreate').classList.add('createTaskBlockConfirmCreateDeactivated');
        f_close();
      }
    }

    function f_close() {
      backdrop.style.display = 'none';

      document.querySelector('.createTaskBlock').classList.add('createTaskBlockSuper');

      backdrop.removeEventListener('click', f_close); //снимаем эти два слушателя

      closeBtn.removeEventListener('click', f_close); //с их функциями

      let addMoreTaskButton = document.querySelector('.createTaskBlockCreateProjectBtnAddMoreTask'); //Прячем кнопку Add more task
      addMoreTaskButton.style.display = 'none';
      let createTaskBlockCreateProjectBtn = document.querySelector('.createTaskBlockCreateProjectBtn'); //Пряяем кнопку CREATE PROJECT
      createTaskBlockCreateProjectBtn.style.display = 'none';
      let createTaskBlock = document.querySelector('.createTaskBlock');
      createTaskBlock.classList.remove('createTaskBlockHide');

      document.querySelector('#singleTask').disabled = false; //активируем вкладку SINGLE TASK
      document.querySelector('#project').disabled = false; //активируем вкладку PROJECT

      //document.querySelector("#singleTask").checked = false; //по-умолчанию  SINGLE TASK неактивна
      //document.querySelector("#project").checked = true;    //по-умолчанию делаем активной PROJECT

      document
        .getElementsByClassName('createTaskBlockConfirmCreate')[0]
        .removeEventListener('click', f_createSubTaskInModal);
      document
        .getElementsByClassName('createTaskBlockCreateProjectBtnAddMoreTaskBtn')[0]
        .removeEventListener('click', f_addSubTaskInModal);
      document.getElementsByClassName('createProjectBtn')[0].removeEventListener('click', f_finishCreatingProject);
      modal[0].removeEventListener('click', f_validationCheck);
      modal[0].removeEventListener('keyup', f_validationCheck);

      if (document.querySelectorAll('.createTaskHeader').length != 0) {
        // Перед закрытием окна удаляем все созданные в диалоговом окне субтаски
        let readyTasks = document.querySelectorAll('.createTaskHeader'); // чтобы при следующем открытии modal не выскочили лишние не удаленные субтаски

        for (var i = 0; i < readyTasks.length; i++) {
          readyTasks[i].remove();
        }
      }
      if (document.querySelectorAll('.createTaskHeader').length == 0) {
        // Когда в окне не окажется ни одной созданной субтаски
        modal[0].classList.remove('modalShow'); // (они либо отправлены на выполнение или не создавались вообще)
      } // мы можем закрыть диалоговое окно

      // Чистим во всех вкладках форму перед закрытием диалогового окна
      let clearAllInputs = document.querySelectorAll('input');
      for (var i = 0; i < clearAllInputs.length; i++) {
        clearAllInputs[i].value = '';
      }
    }

    function f_writeMsgToUser() {
      let messagesToUsers = window.localStorage.getItem('messagesToUsers');
      let modalInfoUserMsgTextarea = document.querySelector(".modalInfoUserTextarea");

      if (messagesToUsers == null) {
        messagesToUsers = {};
      } else {
        messagesToUsers = JSON.parse(messagesToUsers);
      }


      let msg = modalInfoUserMsgTextarea.value;

      let usr = document.getElementById("modalInfoUserName"); // Determinig user name
      let p = /[A-Z][a-z]+/;
      usr = usr.innerHTML.match(p);

      usr = usr[0];
      
      let tID = ''; // Determinig to which task refers this message

      tID = document.getElementById("modalInfoUserTaskID").innerHTML;

      

      let usersBranches = [...Object.keys(messagesToUsers)]; // we obtain array ["Alex", "Andrew", "Stephanie", "Alex JR", "Anastacia", "Rita", "Elena", "Julia", "Mark", "George", "Egor"]
      
      let d = new Date();
      let id = d.getTime(); // creating msg ID

      if (usersBranches.length == 0) {
        // if it turns out that we don't have any messages from this user yet, we must create his userMessageBranch
        
        messagesToUsers[usr] = {};
        messagesToUsers[usr][id] = {
          // creating userMessageBranch

          Unread: true,
          message: msg,
          taskID: tID, // setting to which task does this message refer
          sender: userChoose
        };
        
      } else {
        for (var i = 0; i < usersBranches.length; i++) {
          if (usr == usersBranches[i]) {
            
            messagesToUsers[usr][id] = {
              Unread: true,
              message: msg,
              taskID: tID, // setting to which task does this message refer
              sender: userChoose
            };
            break;
          } else if (i == usersBranches.length - 1) {
            
            messagesToUsers[usr] = {};
            messagesToUsers[usr][id] = {
              // creating userMessageBranch

              Unread: true,
              message: msg,
              taskID: tID, // setting to which task does this message refer
              sender: userChoose
            };
          }
        }
      }
      
      window.localStorage.setItem('messagesToUsers', JSON.stringify(messagesToUsers));
      admin.closeInfoModal();
    }

    function f_readMsgFromAdmin(user) {
      if (user !== 'Manager') {
        f_read(user);
      }
      else {
        let bufferPersonsData = window.localStorage.getItem('personsData');
        bufferPersonsData = JSON.parse(bufferPersonsData);

        for (let c = 0; c < bufferPersonsData.length; c++) {
          console.log(bufferPersonsData[c].position)
          if (bufferPersonsData[c]['position'] == 'Manager') {

            // let loginedUserPhoto = document.querySelector(".blockMainLoginedUser");
            // let loginedUserName = document.querySelector("#logout p ");
            // loginedUserPhoto.style.backgroundImage = `url(${bufferPersonsData[c]['photo']})`;
            // loginedUserName.innerHTML = `${bufferPersonsData[c]['firstName']}`;	
            // console.log(loginedUserPhoto.style.backgroundImage);

            user = bufferPersonsData[c]['firstName'];

            break;
          }
        }
        f_read(user);
      }

      function f_read(user) {
        let messagesToUsers = window.localStorage.getItem('messagesToUsers');
        messagesToUsers = JSON.parse(messagesToUsers);

        let usersMsgBranches = Object.keys(messagesToUsers); // obtain ["Alex", "Andrew", "Stephanie", "Alex JR", "Anastacia", "Rita", "Elena", "Julia", "Mark", "George", "Egor"]
        let userMsgBranch = null;
        if (usersMsgBranches.length !== 0) {
          for (var i = 0; i < usersMsgBranches.length; i++) {
            if (user == usersMsgBranches[i]) {
              // search in usersMsgBranches index of user, under which we entered in Application
              userMsgBranch = usersMsgBranches[i]; // and storing this name in userMsgBranch
              break;
            }
          }
          
          let unreadMessages = []; // here we store user all unread messages
          let unreadMsg = {};
          if (userMsgBranch !== null) {
            let allUserMessages = Object.keys(messagesToUsers[userMsgBranch]); // messagesToUsers[indexUserMsg] - gives for example "Andrew"
            // in "Andrew" is stored object like ID: {}, ID: {}, ... , ID: {}
            // therefore we obtain [ ID, ID, ID, ... , ID ]
            allUserMessages.map((msg) => {
              
              if (messagesToUsers[userMsgBranch][msg]['Unread'] == true) {
                messagesToUsers[userMsgBranch][msg]['Unread'] = false; // setting current message as already being read
                unreadMsg['ID'] = msg;
                unreadMsg['message'] = messagesToUsers[userMsgBranch][msg]['message'];
                unreadMsg['sender'] = messagesToUsers[userMsgBranch][msg]['sender'];
                unreadMsg['taskID'] = messagesToUsers[userMsgBranch][msg]['taskID'];

                let newObj = { ...unreadMsg };
                unreadMessages.push(newObj);
                

              }
            });
            // console.log(unreadMessages); // !!! FINALLY WE GET ALL UNREAD BY USER MESSAGES  !!!
            if (unreadMessages.length !== 0) {

              
              f_openModalMessages(unreadMessages);

              
              let envelope = document.querySelector(".fa-envelope");
              let bubbleAlert = document.getElementById("blockMainHeaderLogout__MsgCounter");
              let blockAlertWrapper = document.getElementById(".blockMainLoginedUserMessages");
              envelope.style.display = "none";
              envelope.removeEventListener('click', admin.readMessage);
              bubbleAlert.innerHTML = unreadMessages.length;
              bubbleAlert.style.display = "none";

            }
            
          }
          window.localStorage.setItem('messagesToUsers', JSON.stringify(messagesToUsers));
        }
      }
    }

    function f_openModalMessages(unreadMessages) {
      let modalMessagesWrapper = document.querySelector(".modalMessagesWrapper");
      let modalMessages = document.querySelector(".modalMessages");
      let dataMain = window.localStorage.getItem('dataMain');
      let closeMessagesBtn = document.getElementById("modalMessagesClose");
      dataMain = JSON.parse(dataMain);
      modalMessages.classList.add("modalMessagesShow"); //делаем видимым диал.окно

      backdrop.style.display = 'block'; //ставим фон диал.окна

      f_closeBlockMainSideMenu(); // Closing blockMainSideMenu

      backdrop.addEventListener('click', f_closeModalMessages);


      closeMessagesBtn.addEventListener('click', f_closeModalMessages);


      for (let i = 0; i < unreadMessages.length; i++) {
        let message = document.createElement("div");
        message.className = "modalMessagesSingle";

        let messageName = document.createElement("div");
        messageName.className = "modalMessagesSingleName";
        let messageNameText = document.createTextNode(unreadMessages[i]["sender"]);
        messageName.appendChild(messageNameText);

        let messageTime = document.createElement("div");
        messageTime.className = "modalMessagesSingleTime";
        let calcTime = new Date(parseInt(unreadMessages[i]["ID"]));
        calcTime = calcTime.toLocaleString();
        let messageTimeText = document.createTextNode(calcTime);
        messageTime.appendChild(messageTimeText);

        let messageTitle = document.createElement("div");
        messageTitle.className = "modalMessagesSingleTitle";



        let taskName = "";
        for (let j = 0; j < dataMain.length; j++) {
          // console.log(dataMain[j])
          for (let k = 0; k < dataMain[j]["subTask"].length; k++) {
            if (dataMain[j]["subTask"][k]["taskID"] == parseInt(unreadMessages[i]["taskID"])) {
              taskName = dataMain[j]["subTask"][k]["task"];
              break;
            }
          }

        }
        let messageTitleText = document.createTextNode(taskName);
        messageTitle.appendChild(messageTitleText);

        let messageMsg = document.createElement("div");
        messageMsg.className = "modalMessagesSingleMsg";
        let messageMsgText = document.createTextNode(unreadMessages[i]["message"]);
        messageMsg.appendChild(messageMsgText);

        message.appendChild(messageName);
        message.appendChild(messageTime);
        message.appendChild(messageTitle);
        message.appendChild(messageMsg);

        modalMessagesWrapper.appendChild(message);
      }
    }

    function f_closeModalMessages() {
      let modalMessages = document.querySelector(".modalMessages");
      let modalMessagesHeader = document.querySelector(".modalMessagesHeader");
      let closeMessagesBtn = document.getElementById("modalMessagesClose");

      let temp = "";
      modalMessages.classList.remove("modalMessagesShow"); //делаем видимым диал.окно

      backdrop.style.display = 'none';

      document.querySelector('.createTaskBlock').classList.add('createTaskBlockSuper');

      backdrop.removeEventListener('click', f_closeModalMessages); //снимаем эти два слушателя
      closeMessagesBtn.removeEventListener('click', f_closeModalMessages);
      temp = modalMessagesHeader.innerHTML;
      let div = document.createElement("div");
      div.className = "modalMessagesHeader";
      div.innerHTML = temp;

      modalMessages.innerHTML = "";
      modalMessages.appendChild(div);
    }

    function f_filterTasks(period) {

      this.f_closeBlockMainSideMenu();
          
      let diff = null;
        
      for (let i = 0; i < blocks.length; i++) {


        let temp = blocks[i].classList;
        let counter = 0;
        for (let j = 0; j < temp.length; j++) {
          if (temp[j] != "taskViewed") {

          }
          else {
            counter++;
          }

        }
        if (counter == 0) {
          blocks[i].classList.add("taskViewed");
        }

        if (blocks[i].getAttribute("style") != null) {
          blocks[i].removeAttribute("style");
        }


        for (let j = 0; j < blocks[i].childNodes.length; j++) {
          if (blocks[i].childNodes[j].className == 'taskInfo') {
            temp = blocks[i].childNodes[j];
            
            for (let g = 0; g < temp.childNodes.length; g++) {
              if (temp.childNodes[g].className == 'taskInfoDate') {
                //temp.childNodes[g].innerHTML;
                let currD = new Date();
                currD = currD.toString();
                diff = admin.calcDateDiffInDays(temp.childNodes[g].innerHTML, currD);

                if (diff[4] > period || diff[4] < 0) {
                  blocks[i].classList.remove("taskViewed");
                  continue;
                }

              }
            }
          }
        }
      }
      if (period <= 86400000) {
        blockMainHeaderTaskPeriod.innerHTML = 'Today';
      }
      if ((86400000 < period) && (period <= 604800000)) {
        blockMainHeaderTaskPeriod.innerHTML = 'This week';
      }
      if ((604800000 < period) && (period <= 18144000000)) {
        blockMainHeaderTaskPeriod.innerHTML = 'This month';
      }
      if (period > 18144000000) {
        blockMainHeaderTaskPeriod.innerHTML = 'This year';
      }


      chosenIndex = 1;
      this.f_showDisplay(blocksViewed);
    }
    
    function f_filterTasksAll() {
      this.f_closeBlockMainSideMenu();
      for (let i = 0; i < blocks.length; i++) {


        let temp = blocks[i].classList;
        let counter = 0;
        for (let j = 0; j < temp.length; j++) {
          if (temp[j] != "taskViewed") {

          }
          else {
            counter++;
          }

        }
        if (counter == 0) {
          blocks[i].classList.add("taskViewed");
        }

        if (blocks[i].getAttribute("style") != null) {
          blocks[i].removeAttribute("style");
        }
      }
      chosenIndex = 1;
      this.f_showDisplay(blocksViewed);
      blockMainHeaderTaskPeriod.innerHTML = 'All tasks';
    }

    this.freePersonalList = function () {
      return f_freePersonalList();
    };
    this.readMessage = function () {
      return f_readMsgFromAdmin(userChoose);
    };
    this.showLeftModal = function (e) {
      return f_showLeftModal(e);
    };
    this.showRightModal = function (e) {
      return f_showRightModal(e);
    };
    this.closeInfoModal = function () {
      return f_closeModal();
    };
    this.calcDateDiffInDays = function (a, b) {
      return dateDiffInDays(a, b);
    };
    this.filterDays = function () {
      return f_filterTasks(86400000);
    };
    this.filterWeeks = function () {
      return f_filterTasks(604800000);
    };
    this.filterMonths = function () {
      return f_filterTasks(18144000000);
    };
    this.filterAll = function () {
      return f_filterTasksAll();
    };
    this.load = function (dsdsd) {
      return f_load(dsdsd);
    };
    this.writeMsgToUser = function (usr) {
      return f_writeMsgToUser(usr);
    };

    if (user == 'Manager') {
      this.openModalCreate = function () {
        return f_window();
      };
      // this.riseStatus = function (e) {
      //   return f_riseStatus(e);
      // };
      this.launch = function (t) {
        return f_launchTask(t);
      };
    } else {
      Object.freeze(this);
    }
  }

  render() {
    return (
      <Aux>
        <div className="blockMainHeader row no-gutters">
            <div>
                <i className="fas fa-bars" id="blockMainSideMenuOpen" onClick={f_showBlockMainSideMenu}></i>
                <i className="fas fa-arrow-left" id="blockMainSideMenuClose" onClick={f_closeBlockMainSideMenu}></i>
            </div>

            <div id="blockMainHeaderTaskPeriod">All tasks</div>
            <div id="login">
                <a href=""><i className="fas fa-sign-in-alt"></i></a>
            </div>
            <div id="logout">
                <div className="blockMainLoginedUser"></div>
                <p></p>
                <div className="blockMainLoginedUserMessages">
                    
                    <i className="far fa-envelope"></i>
                    <div id="blockMainHeaderLogout__MsgCounter">2</div>
                </div>
                <i className="fas fa-sign-out-alt" id="logoutSign"></i>

            </div>
        </div>

        <div className="blockMainHeaderBackgroundText">PLEASE SIGN IN</div>

        <div className="viewTasksBlockwrapper row flex-nowrap no-gutters" id="viewTaskBlockWrapper">
        </div>

        <div className="blockMainFooter row no-gutters">
          {/* <Paginator blocks={blocksViewed} blocksAll={blocks}> </Paginator> */}
        </div>

        <div className="blockMainMenuAnimated" id="blockMainMenuAnim">
            <nav id="menu">
                <ul className="parent-menu">

                    <li>
                        <a href="#">FILTER</a>
                        <ul>
                            <li>
                                <button className="blockMainMenuAnimatedFilterAll">Show all</button>
                            </li>
                            <li>
                                <button className="blockMainMenuAnimatedFilterDay">Sort by day</button>
                            </li>
                            <li>
                                <button className="blockMainMenuAnimatedFilterWeek">Sort by week</button>
                            </li>
                            <li>
                                <button className="blockMainMenuAnimatedFilterMonth">Sort by month</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">PIN</a>
                    </li>
                    <li>
                        <a href="#">HIDE</a>
                    </li>
                </ul>
            </nav>
            <button className="headerStart__button" id="btn1"><strong>+ ADD TASK</strong></button>
        </div>
      </Aux>
      
    );
  }
}

export default App;
