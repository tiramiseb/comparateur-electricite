webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,a){e.exports=a("NHnr")},"7zck":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("/5sW"),s=a("Oy1H"),n=a.n(s),i=(a("qwQ3"),a("mJx5"),a("NVob")),o=a.n(i);function l(e,t){for(var a=e.prix.length-1;a>=0;a--){var r=e.prix[a],s=r.abo[t],n=r.hp[t];if((s||(s=r.abo["x"],s))&&(n||(n=r.hp["x"],n))){if("hphc"!=e.type&&"tempo"!=e.type)return{date:r.date,hp:n,abo:s};var i=r.hc[t];if(i||(i=r.hc["x"],i)){if("hphc"==e.type)return{date:r.date,hc:i,hp:n,abo:s};var o=r.hcbc[t],l=r.hpbc[t],c=r.hcrg[t],u=r.hprg[t];if((o||(o=r.hcbc["x"],o))&&(l||(l=r.hpbc["x"],l))&&(c||(c=r.hcrg["x"],c))&&(u||(u=r.hprg["x"],u))&&"tempo"==e.type)return{date:r.date,hc:i,hp:n,hcbc:o,hpbc:l,hcrg:c,hprg:u,abo:s}}}}return null}var c={name:"App",data:function(){return{params:{tarif:0,tarifhc:0,tarifhpbc:0,tarifhcbc:0,tarifhprg:0,tarifhcrg:0,conso:0,consohc:0,consohpbc:0,consohcbc:0,consohprg:0,consohcrg:0,type:"",puissance:"",total:0,base:!1,hphc:!1,tempo:!1,renouvelable:!1,local:!1,anciens:!1,ve:!1,consove:0},pivot:new Date(Date.now()-31536e6),ordre:{sortBy:"total",descending:!1,rowsPerPage:-1},erreurChargementYaml:!1,adresseActuelle:"",types:[{text:"Tarif unique",value:"base"},{text:"HP / HC",value:"hphc"},{text:"Tempo",value:"tempo"}],puissances:[{text:"3 kVA",value:"3"},{text:"6 kVA",value:"6"},{text:"9 kVA",value:"9"},{text:"12 kVA",value:"12"},{text:"15 kVA",value:"15"},{text:"18 kVA",value:"18"},{text:"24 kVA",value:"24"},{text:"30 kVA",value:"30"},{text:"36 kVA",value:"36"}],origTarifs:[],fournisseurs:[],problemesOffres:[]}},created:function(){var e=this;this.urlVersParams();var t=new XMLHttpRequest;t.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE){if(200!=this.status)return void(e.erreurChargementYaml=!0);try{e.origTarifs=o.a.safeLoad(this.responseText)}catch(t){return e.erreurChargementYaml=!0,void console.error(t)}e.recalculer()}},t.open("GET","tarifs.yaml",!0),t.send(null)},watch:{params:{deep:!0,handler:function(){this.recalculer()}}},computed:{headers:function(){var e=[{text:"Date tarif",align:"left",value:"date"},{text:"Offre",align:"left",value:"offre"},{text:"Type",align:"left",value:"type"},{text:"Total",align:"right",value:"total"},{text:"HP",align:"right",value:"hp"},{text:"HC",align:"right",value:"hc"},{text:"Abo",align:"right",value:"abo"}];return this.params.ve&&(e.push({text:"VE HP",align:"right",value:"vehp"}),e.push({text:"VE HC",align:"right",value:"vehc"})),0!=this.params.total&&e.push({text:"Delta",align:"right",value:"delta"}),e},labelHP:function(){switch(this.params.type){case"hphc":return"Heures pleines";case"tempo":return"Heures pleines jour bleu"}return""},labelHC:function(){switch(this.params.type){case"hphc":return"Heures creuses";case"tempo":return"Heures creuses jour bleu"}return""}},methods:{humanType:function(e){switch(e){case"hphc":return"HP/HC";case"tempo":return"Tempo"}return"Base"},recalculer:function(){var e,t,a=this,r=[];switch(this.problemesOffres=[],this.params.type){case"hphc":e=this.params.conso,t=this.params.consohc;break;case"tempo":e=this.params.conso+this.params.consohpbc+this.params.consohprg,t=this.params.consohc+this.params.consohcbc+this.params.consohcrg;break;default:e=this.params.conso/3*2,t=this.params.conso/3;break}var s=this;this.origTarifs.forEach(function(n){if(!(a.params.renouvelable&&!n.renouvelable||a.params.local&&!n.local||"base"==n.type&&!a.params.base||"hphc"==n.type&&!a.params.hphc||"tempo"==n.type&&!a.params.tempo)){var i=l(n,a.params.puissance),o=new Date;if(i)if(i.date){try{var c=i.date.toString()}catch(e){return void s.problemesOffres.push("Mauvais format pour la date de l'offre "+n.offre)}if(8==c.length){var u=parseInt(i.date.toString().substr(0,4)),p=parseInt(i.date.toString().substr(4,2))-1,m=parseInt(i.date.toString().substr(6,2));if(o.setFullYear(u,p,m),!(o<a.pivot)||a.params.anciens){var f={offre:n.offre,type:n.type,renouvelable:n.renouvelable,local:n.local,abo:i.abo,vieuxTarif:o<a.pivot,date:o.toLocaleDateString()};if(n.url&&""!=n.url&&(f.url=n.url),n.note&&""!=n.note&&(f.note=n.note),i.abo)if(i.hp){switch(n.type){case"hphc":if(!i.hc)return void s.problemesOffres.push("Prix HC manquant pour l'offre "+n.offre);f.hp=i.hp,f.hc=i.hc;break;case"tempo":if(!i.hc)return void s.problemesOffres.push("Prix HC manquant pour l'offre "+n.offre);if(!i.hcbc)return void s.problemesOffres.push("Prix HC jours blancs manquant pour l'offre "+n.offre);if(!i.hpbc)return void s.problemesOffres.push("Prix HP jours blancs manquant pour l'offre "+n.offre);if(!i.hcrg)return void s.problemesOffres.push("Prix HC jours rouges manquant pour l'offre "+n.offre);if(!i.hprg)return void s.problemesOffres.push("Prix HP jours rouges manquant pour l'offre "+n.offre);f.hp=(300*i.hp+43*i.hpbc+22*i.hprg)/365,f.hc=(300*i.hc+43*i.hcbc+22*i.hcrg)/365;break;default:f.hp=i.hp,f.hc=i.hp;break}f.total=f.abo+f.hp*e/100+f.hc*t/100,f.vehp=f.hp*a.params.consove*1.15/100,f.vehc=f.hc*a.params.consove*1.15/100,f.delta=100*f.total/a.params.total-100,r.push(f)}else s.problemesOffres.push("Prix HP manquant pour l'offre "+n.offre);else s.problemesOffres.push("Prix de l'abonnement manquant pour l'offre "+n.offre)}}else s.problemesOffres.push("Mauvais format pour la date de l'offre "+n.offre)}else s.problemesOffres.push("Date manquante pour l'offre "+n.offre)}}),this.fournisseurs=r,this.paramsVersUrl()},urlVersParams:function(){var e=this,t=document.location.search.substr(1).split("&"),a=!1;t.forEach(function(t){var r=t.split("="),s=n()(e.params[r[0]]);if(1==r.length&&"boolean"==s)return"base"!=r[0]&&"hphc"!=r[0]&&"tempo"!=r[0]||(a=!0),void(e.params[r[0]]=!0);switch(s){case"boolean":"false"==r[1]?(e.params[r[0]]=!1,"base"!=r[0]&&"hphc"!=r[0]&&"tempo"!=r[0]||(a=!0)):(e.params[r[0]]=!0,"base"!=r[0]&&"hphc"!=r[0]&&"tempo"!=r[0]||(a=!0));break;case"number":isNaN(parseInt(r[1]))||0==parseInt(r[1])||(e.params[r[0]]=parseInt(r[1]));break;case"string":e.params[r[0]]=r[1];break}}),a||(this.params.base=!0,this.params.hphc=!0,this.params.tempo=!0),this.params.type||(this.params.type="base"),this.params.puissance||(this.params.puissance="6")},paramsVersUrl:function(){var e=this,t=[];Object.keys(this.params).forEach(function(a){var r=n()(e.params[a]),s=e.params[a];switch(r){case"boolean":s&&t.push(a);break;case"string":t.push(a+"="+s);break;case"number":0!=s&&t.push(a+"="+s);break}});var a=window.location.href.split("?")[0],r=t.join("&");this.adresseActuelle="".concat(a,"?").concat(r),window.history.replaceState({},"",this.adresseActuelle)}}},u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",[e._v("\n      Comparateur de tarifs d'électricité\n      "),e.$vuetify.breakpoint.mdAndUp?a("span",[e._v(" en France, indépendant et participatif")]):e._e()])],1),a("v-content",[a("v-container",{attrs:{"grid-list-sm":""}},[a("v-alert",{staticClass:"mb-3",attrs:{type:"warning",value:e.problemesOffres.length>0}},[a("p",[e._v("Problème"),e.problemesOffres.length>1?a("span",[e._v("s")]):e._e(),e._v(" dans le fichier des tarifs :")]),a("ul",e._l(e.problemesOffres,function(t){return a("li",{key:t},[e._v("\n            "+e._s(t)+"\n          ")])}))]),a("v-expansion-panel",{staticClass:"ml-0",attrs:{expand:"",light:""}},[a("v-expansion-panel-content",[a("div",{attrs:{slot:"header"},slot:"header"},[a("v-icon",[e._v("help")]),e._v("\n            Aide\n          ")],1),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"intro",attrs:{xs12:""}},[a("h2",[e._v("Qui, quoi, comment ?")]),a("v-container",{attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("p",[e._v("Ce comparateur a été entièrement créé sur le temps libre de "),a("a",{attrs:{href:"https://www.maccagnoni.eu/",target:"_blank"}},[e._v("Sébastien Maccagnoni")]),e._v(", qui n'a aucun intérêt financier dans aucun des fournisseurs d'accès cités. Informaticien, curieux et aimant les comparatifs, Sébastien créait tous les ans des tableaux afin de comparer le tarif qu'il paye à ce qu'il pourrait payer ailleurs. Dans un esprit de partage et pour exercer sa passion du développement pour un projet sympa, il a décidé de créer ce comparateur.")]),a("p",[e._v("Attention: ce comparateur ne prend en compte que les offres électricité seules: aucune offre électricité+gaz n'est traitée. Les liens du tableau comparatif n'offrent aucune réduction d'aucune sorte, chez aucun fournisseur.")]),a("p",[e._v("Sébastien a choisi de n'afficher aucune publicité sur ce site : celui-ci ne lui apporte aucune rémunération directe. Si vous trouvez ce comparateur utile et que vous souhaitez récompenser Sébastien, vous pouvez faire lui faire un don via "),a("a",{attrs:{href:"https://www.tipeee.com/smacc"}},[e._v("Tipeee")]),e._v(".")]),a("p",[a("b",[e._v("Sébastien a choisi de s'abonner au fournisseur Ilek. Si vous souhaitez suivre son choix, n'hésitez pas à passer par "),a("a",{attrs:{href:"https://www.ilek.fr/ambassadors/88cc8848-ab5d-4c9c-a3a1-88d8de5a1cb3?referral=ILEK10995",target:"_blank"}},[e._v("ce lien de parrainage")]),e._v(" : vos premiers 100 kWh seront offerts.")])])]),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("p",[e._v("L'intérêt de ce comparateur, en face d'autres outils du même genre, est multiple :")]),a("ul",[a("li",[e._v("l'ensemble des tarifs sont manuellement vérifiés et mis à jour, au moins une fois par an, sur la base des tarifs officiels des fournisseurs ;")]),a("li",[e._v("les tarifs proposés sont comparés en une seule page, un grand tableau concis et complet ;")]),a("li",[e._v("l'ensemble des calculs sont effectués sur votre propre machine: aucune information n'est transmise au serveur, aucun cookie n'est installé, aucun \"flicage\" n'est possible ;")]),a("li",[e._v("vous pouvez comparer les tarifs avec votre facture actuelle ;")]),a("li",[e._v("si vous avez des idées ou des besoins, vous pouvez les soumettre — de même, si vous voulez participer, c'est possible, cherchez le menu en bas de l'écran pour en savoir plus !")])])])],1)],1)],1),a("v-divider",{attrs:{light:""}}),a("v-flex",{attrs:{xs12:"",md6:""}},[a("h2",[e._v("Les paramètres")]),a("p",[e._v('La section "Paramètres" vous permet de renseigner votre consommation afin de pouvoir calibrer le comparateur.')]),a("p",[e._v("Tout d'abord, indiquez votre type d'abonnement: tarif unique, HP/HC ou tempo (le comparateur ne prend pas en compte le tarif EJP) ; ensuite, précisez la puissance nécessaire en kVA ; enfin, renseignez votre consommation annuelle en kWh dans la colonne \"Consommation annuelle\".")]),a("p",[e._v('Le champ "Facture actuelle annuelle" et la section "Prix actuel du kWh" permettent de comparer précisément votre abonnement actuel avec les offres connues du comparateur. Ceux-ci sont facultatifs.')]),a("h3",[e._v("Options")]),a("dl",[a("dt",[e._v("Inclure tarifs base")]),a("dd",[e._v("Afficher les offres avec un seul tarif quel que soit le moment de la journée.")]),a("dt",[e._v("Inclure tarifs heures pleines / heures creuses")]),a("dd",[e._v("Afficher les offres proposant un double tarif heures pleines / heures creuses.")]),a("dt",[e._v("Inclure tarifs tempo")]),a("dd",[e._v("Afficher les offres proposant six tarifs (jours bleu/blanc/rouge, heures pleines ou creuses).")]),a("dt",[e._v("Inclure anciens tarifs")]),a("dd",[e._v("Afficher les tarifs anciens (plus vieux qu'un an, généralement des offres non reconduites).")]),a("dt",[e._v("Voiture électrique : prix/100km")]),a("dd",[e._v("Afficher une estimation du prix de l'électricité pour 100km parcourus en voiture électrique.")]),a("dt",[e._v("Consommation moyenne de votre voiture")]),a("dd",[e._v("Consommation en kWh aux 100km de votre voiture électrique (si vous ne savez pas, 16kWh/100 serait un bon point de départ) ; cette consommation est automatiquement majorée de 15% pour prendre en compte le rendement du chargeur.")])])]),a("v-flex",{attrs:{xs12:"",md6:""}},[a("h2",[e._v("Le comparatif")]),a("dl",[a("dt",[e._v("Date tarif")]),a("dd",[e._v("Date à laquelle le tarif a été consulté sur le site web du fournisseur")]),a("dt",[e._v("Offre")]),a("dd",[e._v("Fournisseur et nom de l'offre")]),a("dt",[e._v("Type")]),a("dd",[e._v("Type de l'offre (base, HP/HC ou tempo)")]),a("dt",[e._v("Total")]),a("dd",[e._v("Coût annuel avec l'offre, pour la consommation renseignée dans les paramètres")]),a("dt",[e._v("HP")]),a("dd",[e._v('Coût d\'un kWh en heures pleines (coût unique pour un tarif "base", ou coût moyen pour un tarif tempo)')]),a("dt",[e._v("HC")]),a("dd",[e._v('Coût d\'un kWh en heures creuses (inapplicable pour un tarif "base", coût moyen pour un tarif tempo)')]),a("dt",[e._v("Abo")]),a("dd",[e._v("Coût de l'abonnement annuel")]),a("dt",[e._v("VE HP (optionnel)")]),a("dd",[e._v("Coût pour 100km parcourus avec une voiture électrique chargée en heures pleines")]),a("dt",[e._v("VE HC (optionnel)")]),a("dd",[e._v("Coût pour 100km parcourus avec une voiture électrique chargée en heures creuses")]),a("dt",[e._v("Delta (optionnel)")]),a("dd",[e._v("Différence (en pourcents) entre votre tarif total actuel et le tarif affiché")])]),a("hr"),a("ul",[a("li",[e._v("Tous les prix annoncés sont TTC")]),a("li",[e._v("Les lignes en rouge représentent des tarifs anciens, généralement à ignorer")]),a("li",[e._v('Les offres sur fond vert clair sont des offres "énergie 100% renouvelable"')]),a("li",[e._v('Les offres sur fond vert foncé sont des offres "renouvelable et local", permettant un "circuit court"')]),a("li",[e._v('Lorsque des offres sont complexes (offres "week-end" par exemple), le simulateur répartit les consommations de manière lissée, comme si vous consommiez autant à tous les moments — bien sûr, si vous avez précisé vos consommations HP et HC, celles-ci restent prises en compte.')])])])],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("h2",[e._v("Revenir sur le comparateur")]),a("p",[e._v("Pour revenir sur le comparateur en gardant vos paramètres, enregistez simplement l'adresse courante dans vos marque-pages, celle-ci change selon vos paramètres. Actuellement, l'adresse à utiliser pour revenir avec vos paramètres est la suivante :")]),a("p",[a("a",{attrs:{href:e.adresseActuelle}},[e._v(e._s(e.adresseActuelle))])])])],1)],1)],1),a("v-expansion-panel-content",{attrs:{value:"true"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("v-icon",[e._v("settings")]),e._v("\n            Paramètres\n          ")],1),a("v-container",{staticClass:"px-4",attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-subheader",{attrs:{light:""}},[e._v("Abonnement")]),a("v-select",{attrs:{light:"",items:e.types,label:"Type d'abonnement","single-line":""},model:{value:e.params.type,callback:function(t){e.$set(e.params,"type",t)},expression:"params.type"}}),a("v-select",{attrs:{light:"",items:e.puissances,label:"Puissance","single-line":""},model:{value:e.params.puissance,callback:function(t){e.$set(e.params,"puissance",t)},expression:"params.puissance"}}),a("v-text-field",{attrs:{light:"",type:"number",label:"Facture actuelle annuelle (facultatif)",suffix:"€/an",min:"0"},model:{value:e.params.total,callback:function(t){e.$set(e.params,"total",e._n(t))},expression:"params.total"}}),a("v-subheader",{attrs:{light:""}},[e._v("Options")]),a("v-checkbox",{attrs:{light:"",label:"Inclure tarifs base"},model:{value:e.params.base,callback:function(t){e.$set(e.params,"base",t)},expression:"params.base"}}),a("v-checkbox",{attrs:{light:"",label:"Inclure tarifs heures pleines / heures creuses"},model:{value:e.params.hphc,callback:function(t){e.$set(e.params,"hphc",t)},expression:"params.hphc"}}),a("v-checkbox",{attrs:{light:"",label:"Inclure tarifs tempo"},model:{value:e.params.tempo,callback:function(t){e.$set(e.params,"tempo",t)},expression:"params.tempo"}}),a("v-checkbox",{attrs:{light:"",label:"Uniquement électricité renouvelable"},model:{value:e.params.renouvelable,callback:function(t){e.$set(e.params,"renouvelable",t)},expression:"params.renouvelable"}}),a("v-checkbox",{attrs:{light:"",label:"Uniquement production locale"},model:{value:e.params.local,callback:function(t){e.$set(e.params,"local",t)},expression:"params.local"}}),a("v-checkbox",{attrs:{light:"",label:"Inclure anciens tarifs"},model:{value:e.params.anciens,callback:function(t){e.$set(e.params,"anciens",t)},expression:"params.anciens"}}),a("v-container",{staticClass:"pa-0"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-checkbox",{attrs:{light:"",label:"Voiture électrique : prix/100km"},model:{value:e.params.ve,callback:function(t){e.$set(e.params,"ve",t)},expression:"params.ve"}})],1),a("v-flex",{attrs:{xs12:""}},[e.params.ve?a("v-text-field",{attrs:{light:"",type:"number",label:"Consommation moyenne de votre voiture",suffix:"kWh/100km",hint:"Sera majorée de 15% (rendement du chargeur)",min:"0"},model:{value:e.params.consove,callback:function(t){e.$set(e.params,"consove",e._n(t))},expression:"params.consove"}}):e._e()],1)],1)],1)],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-subheader",{attrs:{light:""}},[e._v("Consommation annuelle")]),a("v-text-field",{attrs:{light:"",type:"number",label:e.labelHP,suffix:"kWh/an",min:"0"},model:{value:e.params.conso,callback:function(t){e.$set(e.params,"conso",e._n(t))},expression:"params.conso"}}),"hphc"==e.params.type||"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:e.labelHC,suffix:"kWh/an",min:"0"},model:{value:e.params.consohc,callback:function(t){e.$set(e.params,"consohc",e._n(t))},expression:"params.consohc"}}):e._e(),"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:"Heures pleines jours blancs",suffix:"kWh/an",min:"0"},model:{value:e.params.consohpbc,callback:function(t){e.$set(e.params,"consohpbc",e._n(t))},expression:"params.consohpbc"}}):e._e(),"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:"Heures creuses jours blancs",suffix:"kWh/an",min:"0"},model:{value:e.params.consohcbc,callback:function(t){e.$set(e.params,"consohcbc",e._n(t))},expression:"params.consohcbc"}}):e._e(),"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:"Heures pleines jours rouges",suffix:"kWh/an",min:"0"},model:{value:e.params.consohprg,callback:function(t){e.$set(e.params,"consohprg",e._n(t))},expression:"params.consohprg"}}):e._e(),"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:"Heures creuses jours rouges",suffix:"kWh/an",min:"0"},model:{value:e.params.consohcrg,callback:function(t){e.$set(e.params,"consohcrg",e._n(t))},expression:"params.consohcrg"}}):e._e()],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-subheader",{attrs:{light:""}},[e._v("Prix actuel du kWh (facultatif)")]),a("v-text-field",{attrs:{light:"",type:"number",label:e.labelHP,suffix:"cts/kWh",min:"0"},model:{value:e.params.tarif,callback:function(t){e.$set(e.params,"tarif",e._n(t))},expression:"params.tarif"}}),"hphc"==e.params.type||"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:e.labelHC,suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhc,callback:function(t){e.$set(e.params,"tarifhc",e._n(t))},expression:"params.tarifhc"}}):e._e(),"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:"Heures pleines jours blancs",suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhpbc,callback:function(t){e.$set(e.params,"tarifhpbc",e._n(t))},expression:"params.tarifhpbc"}}):e._e(),"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:"Heures creuses jours blancs",suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhcbc,callback:function(t){e.$set(e.params,"tarifhcbc",e._n(t))},expression:"params.tarifhcbc"}}):e._e(),"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:"Heures pleines jours rouges",suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhprg,callback:function(t){e.$set(e.params,"tarifhprg",e._n(t))},expression:"params.tarifhprg"}}):e._e(),"tempo"==e.params.type?a("v-text-field",{attrs:{light:"",type:"number",label:"Heures creuses jours rouges",suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhcrg,callback:function(t){e.$set(e.params,"tarifhcrg",e._n(t))},expression:"params.tarifhcrg"}}):e._e()],1)],1)],1)],1),a("v-expansion-panel-content",{attrs:{value:"true"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("v-icon",[e._v("search")]),e._v("\n            Comparatif\n          ")],1),a("v-data-table",{attrs:{light:"","hide-actions":"","must-sort":"",headers:e.headers,items:e.fournisseurs,pagination:e.ordre,"no-data-text":"Aucune donnée correspondante","no-results-text":"Aucun résultat correspondant",transition:"slide-y-transition"},on:{"update:pagination":function(t){e.ordre=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{class:{"red--text":t.item.vieuxTarif}},[e._v("\n                "+e._s(t.item.date)+"\n              ")]),a("td",{class:{"red--text":t.item.vieuxTarif,green:t.item.renouvelable,teal:t.item.local&&!t.item.renouvelable,"accent-1":t.item.renouvelable&&!t.item.local||!t.item.renouvelable&&t.item.local,"accent-2":t.item.renouvelable&&t.item.local}},[a("v-tooltip",{attrs:{disabled:!t.item.note,bottom:"","max-width":"500","open-delay":"0","close-delay":"500"}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t.item.url?e._e():a("span",[e._v(e._s(t.item.offre))]),t.item.url?a("a",{attrs:{href:t.item.url,target:"_blank"}},[e._v(e._s(t.item.offre))]):e._e(),t.item.note?a("v-icon",{staticClass:"ml-2",attrs:{light:"",small:""}},[e._v("help")]):e._e()],1),a("span",{domProps:{innerHTML:e._s(t.item.note)}})])],1),a("td",{class:{green:t.item.renouvelable,teal:t.item.local&&!t.item.renouvelable,"accent-1":t.item.renouvelable&&!t.item.local||!t.item.renouvelable&&t.item.local,"accent-2":t.item.renouvelable&&t.item.local}},[e._v("\n                "+e._s(e.humanType(t.item.type))+"\n              ")]),a("td",{staticClass:"text-xs-right"},[a("b",[e._v(e._s(t.item.total.toFixed(2).replace(".",","))+" €")])]),a("td",{staticClass:"text-xs-right"},[e._v("\n                "+e._s(t.item.hp.toFixed(2).replace(".",","))+" cts\n              ")]),a("td",{staticClass:"text-xs-right"},["hphc"==t.item.type||"tempo"==t.item.type?a("span",[e._v(e._s(t.item.hc.toFixed(2).replace(".",","))+" cts")]):e._e()]),a("td",{staticClass:"text-xs-right"},[e._v("\n                "+e._s(t.item.abo.toFixed(2).replace(".",","))+" €\n              ")]),e.params.ve?a("td",{staticClass:"text-xs-right"},[e._v("\n                "+e._s(t.item.vehp.toFixed(2).replace(".",","))+" €\n              ")]):e._e(),e.params.ve?a("td",{staticClass:"text-xs-right"},["hphc"==t.item.type||"tempo"==t.item.type?a("span",[e._v(e._s(t.item.vehc.toFixed(2).replace(".",","))+" €")]):e._e()]):e._e(),e.params.total?a("td",{staticClass:"text-xs-right"},[t.item.delta<0?a("span",{staticClass:"success--text"},[e._v(e._s(t.item.delta.toFixed(2).replace(".",","))+" %")]):e._e(),t.item.delta>0?a("span",{staticClass:"error--text"},[e._v("+"+e._s(t.item.delta.toFixed(2).replace(".",","))+" %")]):e._e()]):e._e()]}}])})],1)],1)],1)],1),a("v-footer",{staticClass:"px-2 hidden-xs-only",attrs:{fixed:"",app:"",height:"auto"}},[a("span",[e._v("\n      © 2018 —\n      "),a("a",{staticClass:"primary--text text--lighten-3",attrs:{href:"https://www.maccagnoni.eu"}},[e._v("Sébastien Maccagnoni")]),e._v(" —\n      "),a("a",{staticClass:"primary--text text--lighten-3",attrs:{href:"https://github.com/tiramiseb/comparateur-electricite"}},[e._v("projet sous licence AGPL")])]),a("v-spacer"),a("v-menu",{attrs:{top:"","offset-y":"",transition:"slide-y-reverse-transition"}},[a("v-btn",{attrs:{slot:"activator",color:"info"},slot:"activator"},[e._v("Participer")]),a("v-list",{attrs:{light:""}},[a("v-list-tile",{attrs:{href:"https://github.com/tiramiseb/comparateur-electricite/issues/new?template=erreur",target:"_blank"}},[a("v-list-tile-title",[e._v("Signaler une erreur")])],1),a("v-list-tile",{attrs:{href:"https://github.com/tiramiseb/comparateur-electricite/issues/new?template=nouveau_fournisseur",target:"_blank"}},[a("v-list-tile-title",[e._v("Proposer un nouveau fournisseur")])],1),a("v-list-tile",{attrs:{href:"https://github.com/tiramiseb/comparateur-electricite/issues/new?template=nouveau_tarif",target:"_blank"}},[a("v-list-tile-title",[e._v("Signaler un changement de tarif")])],1),a("v-list-tile",{attrs:{href:"https://github.com/tiramiseb/comparateur-electricite/issues/new?template=amelioration",target:"_blank"}},[a("v-list-tile-title",[e._v("Suggérer une amélioration")])],1)],1)],1),a("v-btn",{attrs:{color:"info",href:"https://www.tipeee.com/smacc",target:"_blank"}},[e._v("Faire un don")])],1),a("v-snackbar",{attrs:{color:"error",timeout:6e3,top:""},model:{value:e.erreurChargementYaml,callback:function(t){e.erreurChargementYaml=t},expression:"erreurChargementYaml"}},[e._v("\n      La liste de tarifs n'a pas pu être chargée. Veuillez réessayer.\n    "),a("v-btn",{attrs:{flat:"",color:"pink"},nativeOn:{click:function(t){e.erreurChargementYaml=!1}}},[e._v("Close")])],1)],1)},p=[],m=a("XyMi");function f(e){a("+VGo")}var h=!1,v=f,d=null,b=null,x=Object(m["a"])(c,u,p,h,v,d,b),g=x.exports,_=a("3EgV"),k=a.n(_);a("7zck");r["a"].use(k.a),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")}},[0]);
//# sourceMappingURL=app.c2b6b5f1.js.map