webpackJsonp([1],{"+VGo":function(e,a){},0:function(e,a,t){e.exports=t("NHnr")},"7zck":function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("/5sW"),r=t("Oy1H"),n=t.n(r),o=(t("qwQ3"),t("mJx5"),t("NVob")),i=t.n(o);function l(e,a){for(var t=e.prix.length-1;t>=0;t--){var s=e.prix[t],r=s.abo[a],n=s.hp[a];if((r||(r=s.abo["x"],r))&&(n||(n=s.hp["x"],n))){if("hphc"!=e.type&&"tempo"!=e.type)return{date:s.date,hp:n,abo:r};var o=s.hc[a];if(o||(o=s.hc["x"],o)){if("hphc"==e.type)return{date:s.date,hc:o,hp:n,abo:r};var i=s.hcbc[a],l=s.hpbc[a],c=s.hcrg[a],u=s.hprg[a];if((i||(i=s.hcbc["x"],i))&&(l||(l=s.hpbc["x"],l))&&(c||(c=s.hcrg["x"],c))&&(u||(u=s.hprg["x"],u))&&"tempo"==e.type)return{date:s.date,hc:o,hp:n,hcbc:i,hpbc:l,hcrg:c,hprg:u,abo:r}}}}return null}var c={name:"App",data:function(){return{params:{tarif:0,tarifhc:0,tarifhpbc:0,tarifhcbc:0,tarifhprg:0,tarifhcrg:0,conso:0,consohc:0,consohpbc:0,consohcbc:0,consohprg:0,consohcrg:0,type:"",puissance:"",total:0,base:!1,hphc:!1,tempo:!1,renouvelable:!1,local:!1,anciens:!1,ve:!1,consove:0},pivot:new Date(Date.now()-31536e6),ordre:{sortBy:"total",descending:!1,rowsPerPage:-1},erreurChargementYaml:!1,adresseActuelle:"",types:[{text:"Tarif unique",value:"base"},{text:"HP / HC",value:"hphc"},{text:"Tempo",value:"tempo"}],puissances:[{text:"3 kVA",value:"3"},{text:"6 kVA",value:"6"},{text:"9 kVA",value:"9"},{text:"12 kVA",value:"12"},{text:"15 kVA",value:"15"},{text:"18 kVA",value:"18"},{text:"24 kVA",value:"24"},{text:"30 kVA",value:"30"},{text:"36 kVA",value:"36"}],origTarifs:[],fournisseurs:[],problemesOffres:[]}},created:function(){var e=this;this.urlVersParams();var a=new XMLHttpRequest;a.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE){if(200!=this.status)return void(e.erreurChargementYaml=!0);try{e.origTarifs=i.a.safeLoad(this.responseText)}catch(a){return e.erreurChargementYaml=!0,void console.error(a)}e.recalculer()}},a.open("GET","tarifs.yaml",!0),a.send(null)},watch:{params:{deep:!0,handler:function(){this.recalculer()}}},computed:{headers:function(){var e=[{text:"Date tarif",align:"left",value:"date"},{text:"Offre",align:"left",value:"offre"},{text:"Type",align:"left",value:"type"},{text:"Total",align:"right",value:"total"},{text:"HP",align:"right",value:"hp"},{text:"HC",align:"right",value:"hc"},{text:"Abo",align:"right",value:"abo"}];return this.params.ve&&(e.push({text:"VE HP",align:"right",value:"vehp"}),e.push({text:"VE HC",align:"right",value:"vehc"})),0!=this.params.total&&e.push({text:"Delta",align:"right",value:"delta"}),e},labelHP:function(){switch(this.params.type){case"hphc":return"Heures pleines";case"tempo":return"Heures pleines jour bleu"}return""},labelHC:function(){switch(this.params.type){case"hphc":return"Heures creuses";case"tempo":return"Heures creuses jour bleu"}return""}},methods:{humanType:function(e){switch(e){case"hphc":return"HP/HC";case"tempo":return"Tempo"}return"Base"},recalculer:function(){var e,a,t=this,s=[];switch(this.problemesOffres=[],this.params.type){case"hphc":e=this.params.conso,a=this.params.consohc;break;case"tempo":e=this.params.conso+this.params.consohpbc+this.params.consohprg,a=this.params.consohc+this.params.consohcbc+this.params.consohcrg;break;default:e=this.params.conso/3*2,a=this.params.conso/3;break}var r=this;this.origTarifs.forEach(function(n){if(!(t.params.renouvelable&&!n.renouvelable||t.params.local&&!n.local||"base"==n.type&&!t.params.base||"hphc"==n.type&&!t.params.hphc||"tempo"==n.type&&!t.params.tempo)){var o=l(n,t.params.puissance),i=new Date;if(o)if(o.date){try{var c=o.date.toString()}catch(e){return void r.problemesOffres.push("Mauvais format pour la date de l'offre "+n.offre)}if(8==c.length){var u=parseInt(o.date.toString().substr(0,4)),p=parseInt(o.date.toString().substr(4,2))-1,m=parseInt(o.date.toString().substr(6,2));if(i.setFullYear(u,p,m),!(i<t.pivot)||t.params.anciens){var f={offre:n.offre,type:n.type,renouvelable:n.renouvelable,local:n.local,abo:o.abo,vieuxTarif:i<t.pivot,date:i.toLocaleDateString()};if(n.url&&""!=n.url&&(f.url=n.url),n.note&&""!=n.note&&(f.note=n.note),o.abo)if(o.hp){switch(n.type){case"hphc":if(!o.hc)return void r.problemesOffres.push("Prix HC manquant pour l'offre "+n.offre);f.hp=o.hp,f.hc=o.hc;break;case"tempo":if(!o.hc)return void r.problemesOffres.push("Prix HC manquant pour l'offre "+n.offre);if(!o.hcbc)return void r.problemesOffres.push("Prix HC jours blancs manquant pour l'offre "+n.offre);if(!o.hpbc)return void r.problemesOffres.push("Prix HP jours blancs manquant pour l'offre "+n.offre);if(!o.hcrg)return void r.problemesOffres.push("Prix HC jours rouges manquant pour l'offre "+n.offre);if(!o.hprg)return void r.problemesOffres.push("Prix HP jours rouges manquant pour l'offre "+n.offre);f.hp=(300*o.hp+43*o.hpbc+22*o.hprg)/365,f.hc=(300*o.hc+43*o.hcbc+22*o.hcrg)/365;break;default:f.hp=o.hp,f.hc=o.hp;break}f.total=f.abo+f.hp*e/100+f.hc*a/100,f.vehp=f.hp*t.params.consove*1.15/100,f.vehc=f.hc*t.params.consove*1.15/100,f.delta=100*f.total/t.params.total-100,s.push(f)}else r.problemesOffres.push("Prix HP manquant pour l'offre "+n.offre);else r.problemesOffres.push("Prix de l'abonnement manquant pour l'offre "+n.offre)}}else r.problemesOffres.push("Mauvais format pour la date de l'offre "+n.offre)}else r.problemesOffres.push("Date manquante pour l'offre "+n.offre)}}),this.fournisseurs=s,this.paramsVersUrl()},urlVersParams:function(){var e=this,a=document.location.search.substr(1).split("&"),t=!1;a.forEach(function(a){var s=a.split("="),r=n()(e.params[s[0]]);if(1==s.length&&"boolean"==r)return"base"!=s[0]&&"hphc"!=s[0]&&"tempo"!=s[0]||(t=!0),void(e.params[s[0]]=!0);switch(r){case"boolean":"false"==s[1]?(e.params[s[0]]=!1,"base"!=s[0]&&"hphc"!=s[0]&&"tempo"!=s[0]||(t=!0)):(e.params[s[0]]=!0,"base"!=s[0]&&"hphc"!=s[0]&&"tempo"!=s[0]||(t=!0));break;case"number":isNaN(parseInt(s[1]))||0==parseInt(s[1])||(e.params[s[0]]=parseInt(s[1]));break;case"string":e.params[s[0]]=s[1];break}}),t||(this.params.base=!0,this.params.hphc=!0,this.params.tempo=!0),this.params.type||(this.params.type="base"),this.params.puissance||(this.params.puissance="6")},paramsVersUrl:function(){var e=this,a=[];Object.keys(this.params).forEach(function(t){var s=n()(e.params[t]),r=e.params[t];switch(s){case"boolean":r&&a.push(t);break;case"string":a.push(t+"="+r);break;case"number":0!=r&&a.push(t+"="+r);break}});var t=window.location.href.split("?")[0],s=a.join("&");this.adresseActuelle="".concat(t,"?").concat(s),window.history.replaceState({},"",this.adresseActuelle)}}},u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",{attrs:{dark:""}},[t("v-toolbar",{attrs:{app:""}},[t("v-toolbar-title",[e._v("\n        Comparateur de tarifs d'électricité\n        "),e.$vuetify.breakpoint.smAndUp?t("span",[e._v(" en France, indépendant et participatif")]):e._e()])],1),t("v-content",[t("v-container",[t("v-alert",{staticClass:"mb-3",attrs:{type:"warning",value:e.problemesOffres.length>0}},[t("p",[e._v("Problème"),e.problemesOffres.length>1?t("span",[e._v("s")]):e._e(),e._v(" dans le fichier des tarifs :")]),t("ul",e._l(e.problemesOffres,function(a){return t("li",{key:a},[e._v("\n              "+e._s(a)+"\n            ")])}))]),t("v-expansion-panel",{attrs:{expand:"",light:""}},[t("v-expansion-panel-content",[t("div",{attrs:{slot:"header"},slot:"header"},[t("v-icon",[e._v("help")]),e._v("\n              Aide\n            ")],1),t("v-container",{attrs:{"grid-list-md":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"intro",attrs:{xs12:""}},[t("h2",[e._v("Qui, quoi, comment ?")]),t("v-container",{attrs:{"grid-list-lg":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm6:""}},[t("p",[e._v("Ce comparateur a été entièrement créé sur le temps libre de "),t("a",{attrs:{href:"https://www.maccagnoni.eu/",target:"_blank"}},[e._v("Sébastien Maccagnoni")]),e._v(", qui n'a aucun intérêt financier dans aucun des fournisseurs d'accès cités. Informaticien, curieux et aimant les comparatifs, Sébastien créait tous les ans des tableaux afin de comparer le tarif qu'il paye à ce qu'il pourrait payer ailleurs. Dans un esprit de partage et pour exercer sa passion du développement pour un projet sympa, il a décidé de créer ce comparateur.")]),t("p",[e._v("Attention: ce comparateur ne prend en compte que les offres électricité seules: aucune offre électricité+gaz n'est traitée. Les liens du tableau comparatif n'offrent aucune réduction d'aucune sorte, chez aucun fournisseur.")]),t("p",[e._v("Sébastien a choisi de n'afficher aucune publicité sur ce site : celui-ci ne lui apporte aucune rémunération directe.")]),t("p",[t("b",[e._v("Sébastien a choisi de s'abonner au fournisseur Ilek. Si vous souhaitez suivre son choix, n'hésitez pas à passer par "),t("a",{attrs:{href:"https://www.ilek.fr/ambassadors/88cc8848-ab5d-4c9c-a3a1-88d8de5a1cb3?referral=ILEK10995",target:"_blank"}},[e._v("ce lien de parrainage")]),e._v(" : vos premiers 100 kWh seront offerts.")])])]),t("v-flex",{attrs:{xs12:"",sm6:""}},[t("p",[e._v("L'intérêt de ce comparateur, en face d'autres outils du même genre, est multiple :")]),t("ul",[t("li",[e._v("l'ensemble des tarifs sont manuellement vérifiés et mis à jour, au moins une fois par an, sur la base des tarifs officiels des fournisseurs ;")]),t("li",[e._v("les tarifs proposés sont comparés en une seule page, un grand tableau concis et complet ;")]),t("li",[e._v("l'ensemble des calculs sont effectués sur votre propre machine: aucune information n'est transmise au serveur, aucun cookie n'est installé, aucun \"flicage\" n'est possible ;")]),t("li",[e._v("vous pouvez comparer les tarifs avec votre facture actuelle ;")]),t("li",[e._v("si vous avez des idées ou des besoins, vous pouvez les soumettre — de même, si vous voulez participer, c'est possible !")])])])],1)],1)],1),t("v-divider",{attrs:{light:""}}),t("v-flex",{attrs:{xs12:"",md6:""}},[t("h2",[e._v("Les paramètres")]),t("p",[e._v('La section "Paramètres" vous permet de renseigner votre consommation afin de pouvoir calibrer le comparateur.')]),t("p",[e._v("Tout d'abord, indiquez votre type d'abonnement: tarif unique, HP/HC ou tempo (le comparateur ne prend pas en compte le tarif EJP) ; ensuite, précisez la puissance nécessaire en kVA ; enfin, renseignez votre consommation annuelle en kWh dans la colonne \"Consommation annuelle\".")]),t("p",[e._v('Le champ "Facture actuelle annuelle" et la section "Prix actuel du kWh" permettent de comparer précisément votre abonnement actuel avec les offres connues du comparateur. Ceux-ci sont facultatifs.')]),t("h3",[e._v("Options")]),t("dl",[t("dt",[e._v("Inclure tarifs base")]),t("dd",[e._v("Afficher les offres avec un seul tarif quel que soit le moment de la journée.")]),t("dt",[e._v("Inclure tarifs heures pleines / heures creuses")]),t("dd",[e._v("Afficher les offres proposant un double tarif heures pleines / heures creuses.")]),t("dt",[e._v("Inclure tarifs tempo")]),t("dd",[e._v("Afficher les offres proposant six tarifs (jours bleu/blanc/rouge, heures pleines ou creuses).")]),t("dt",[e._v("Inclure anciens tarifs")]),t("dd",[e._v("Afficher les tarifs anciens (plus vieux qu'un an, généralement des offres non reconduites).")]),t("dt",[e._v("Voiture électrique : prix/100km")]),t("dd",[e._v("Afficher une estimation du prix de l'électricité pour 100km parcourus en voiture électrique.")]),t("dt",[e._v("Consommation moyenne de votre voiture")]),t("dd",[e._v("Consommation en kWh aux 100km de votre voiture électrique (si vous ne savez pas, 16kWh/100 serait un bon point de départ) ; cette consommation est automatiquement majorée de 15% pour prendre en compte le rendement du chargeur.")])])]),t("v-flex",{attrs:{xs12:"",md6:""}},[t("h2",[e._v("Le comparatif")]),t("dl",[t("dt",[e._v("Date tarif")]),t("dd",[e._v("Date à laquelle le tarif a été consulté sur le site web du fournisseur")]),t("dt",[e._v("Offre")]),t("dd",[e._v("Fournisseur et nom de l'offre")]),t("dt",[e._v("Type")]),t("dd",[e._v("Type de l'offre (base, HP/HC ou tempo)")]),t("dt",[e._v("Total")]),t("dd",[e._v("Coût annuel avec l'offre, pour la consommation renseignée dans les paramètres")]),t("dt",[e._v("HP")]),t("dd",[e._v('Coût d\'un kWh en heures pleines (coût unique pour un tarif "base", ou coût moyen pour un tarif tempo)')]),t("dt",[e._v("HC")]),t("dd",[e._v('Coût d\'un kWh en heures creuses (inapplicable pour un tarif "base", coût moyen pour un tarif tempo)')]),t("dt",[e._v("Abo")]),t("dd",[e._v("Coût de l'abonnement annuel")]),t("dt",[e._v("VE HP (optionnel)")]),t("dd",[e._v("Coût pour 100km parcourus avec une voiture électrique chargée en heures pleines")]),t("dt",[e._v("VE HC (optionnel)")]),t("dd",[e._v("Coût pour 100km parcourus avec une voiture électrique chargée en heures creuses")]),t("dt",[e._v("Delta (optionnel)")]),t("dd",[e._v("Différence (en pourcents) entre votre tarif total actuel et le tarif affiché")])]),t("hr"),t("ul",[t("li",[e._v("Tous les prix annoncés sont TTC")]),t("li",[e._v("Les lignes en rouge représentent des tarifs anciens, généralement à ignorer")]),t("li",[e._v('Les offres sur fond vert clair sont des offres "énergie 100% renouvelable"')]),t("li",[e._v('Les offres sur fond vert foncé sont des offres "renouvelable et local", permettant un "circuit court"')]),t("li",[e._v('Lorsque des offres sont complexes (offres "week-end" par exemple), le simulateur répartit les consommations de manière lissée, comme si vous consommiez autant à tous les moments — bien sûr, si vous avez précisé vos consommations HP et HC, celles-ci restent prises en compte.')])])])],1),t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs12:""}},[t("h2",[e._v("Revenir sur le comparateur")]),t("p",[e._v("Pour revenir sur le comparateur en gardant vos paramètres, enregistez simplement l'adresse courante dans vos marque-pages, celle-ci change selon vos paramètres. Actuellement, l'adresse à utiliser pour revenir avec vos paramètres est la suivante :")]),t("p",[t("a",{attrs:{href:e.adresseActuelle}},[e._v(e._s(e.adresseActuelle))])])])],1)],1)],1),t("v-expansion-panel-content",{attrs:{value:"true"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("v-icon",[e._v("settings")]),e._v("\n              Paramètres\n            ")],1),t("v-container",{staticClass:"px-4",attrs:{"grid-list-lg":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",md4:""}},[t("v-subheader",{attrs:{light:""}},[e._v("Abonnement")]),t("v-select",{attrs:{light:"",items:e.types,label:"Type d'abonnement","single-line":""},model:{value:e.params.type,callback:function(a){e.$set(e.params,"type",a)},expression:"params.type"}}),t("v-select",{attrs:{light:"",items:e.puissances,label:"Puissance","single-line":""},model:{value:e.params.puissance,callback:function(a){e.$set(e.params,"puissance",a)},expression:"params.puissance"}}),t("v-text-field",{attrs:{light:"",type:"number",label:"Facture actuelle annuelle (facultatif)",suffix:"€/an",min:"0"},model:{value:e.params.total,callback:function(a){e.$set(e.params,"total",e._n(a))},expression:"params.total"}}),t("v-subheader",{attrs:{light:""}},[e._v("Options")]),t("v-checkbox",{attrs:{light:"",label:"Inclure tarifs base"},model:{value:e.params.base,callback:function(a){e.$set(e.params,"base",a)},expression:"params.base"}}),t("v-checkbox",{attrs:{light:"",label:"Inclure tarifs heures pleines / heures creuses"},model:{value:e.params.hphc,callback:function(a){e.$set(e.params,"hphc",a)},expression:"params.hphc"}}),t("v-checkbox",{attrs:{light:"",label:"Inclure tarifs tempo"},model:{value:e.params.tempo,callback:function(a){e.$set(e.params,"tempo",a)},expression:"params.tempo"}}),t("v-checkbox",{attrs:{light:"",label:"Uniquement électricité renouvelable"},model:{value:e.params.renouvelable,callback:function(a){e.$set(e.params,"renouvelable",a)},expression:"params.renouvelable"}}),t("v-checkbox",{attrs:{light:"",label:"Uniquement production locale"},model:{value:e.params.local,callback:function(a){e.$set(e.params,"local",a)},expression:"params.local"}}),t("v-checkbox",{attrs:{light:"",label:"Inclure anciens tarifs"},model:{value:e.params.anciens,callback:function(a){e.$set(e.params,"anciens",a)},expression:"params.anciens"}}),t("v-container",{staticClass:"pa-0"},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-checkbox",{attrs:{light:"",label:"Voiture électrique : prix/100km"},model:{value:e.params.ve,callback:function(a){e.$set(e.params,"ve",a)},expression:"params.ve"}})],1),t("v-flex",{attrs:{xs12:""}},[e.params.ve?t("v-text-field",{attrs:{light:"",type:"number",label:"Consommation moyenne de votre voiture",suffix:"kWh/100km",hint:"Sera majorée de 15% (rendement du chargeur)",min:"0"},model:{value:e.params.consove,callback:function(a){e.$set(e.params,"consove",e._n(a))},expression:"params.consove"}}):e._e()],1)],1)],1)],1),t("v-flex",{attrs:{xs12:"",md4:""}},[t("v-subheader",{attrs:{light:""}},[e._v("Consommation annuelle")]),t("v-text-field",{attrs:{light:"",type:"number",label:e.labelHP,suffix:"kWh/an",min:"0"},model:{value:e.params.conso,callback:function(a){e.$set(e.params,"conso",e._n(a))},expression:"params.conso"}}),"hphc"==e.params.type||"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:e.labelHC,suffix:"kWh/an",min:"0"},model:{value:e.params.consohc,callback:function(a){e.$set(e.params,"consohc",e._n(a))},expression:"params.consohc"}}):e._e(),"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:"Heures pleines jours blancs",suffix:"kWh/an",min:"0"},model:{value:e.params.consohpbc,callback:function(a){e.$set(e.params,"consohpbc",e._n(a))},expression:"params.consohpbc"}}):e._e(),"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:"Heures creuses jours blancs",suffix:"kWh/an",min:"0"},model:{value:e.params.consohcbc,callback:function(a){e.$set(e.params,"consohcbc",e._n(a))},expression:"params.consohcbc"}}):e._e(),"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:"Heures pleines jours rouges",suffix:"kWh/an",min:"0"},model:{value:e.params.consohprg,callback:function(a){e.$set(e.params,"consohprg",e._n(a))},expression:"params.consohprg"}}):e._e(),"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:"Heures creuses jours rouges",suffix:"kWh/an",min:"0"},model:{value:e.params.consohcrg,callback:function(a){e.$set(e.params,"consohcrg",e._n(a))},expression:"params.consohcrg"}}):e._e()],1),t("v-flex",{attrs:{xs12:"",md4:""}},[t("v-subheader",{attrs:{light:""}},[e._v("Prix actuel du kWh (facultatif)")]),t("v-text-field",{attrs:{light:"",type:"number",label:e.labelHP,suffix:"cts/kWh",min:"0"},model:{value:e.params.tarif,callback:function(a){e.$set(e.params,"tarif",e._n(a))},expression:"params.tarif"}}),"hphc"==e.params.type||"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:e.labelHC,suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhc,callback:function(a){e.$set(e.params,"tarifhc",e._n(a))},expression:"params.tarifhc"}}):e._e(),"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:"Heures pleines jours blancs",suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhpbc,callback:function(a){e.$set(e.params,"tarifhpbc",e._n(a))},expression:"params.tarifhpbc"}}):e._e(),"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:"Heures creuses jours blancs",suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhcbc,callback:function(a){e.$set(e.params,"tarifhcbc",e._n(a))},expression:"params.tarifhcbc"}}):e._e(),"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:"Heures pleines jours rouges",suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhprg,callback:function(a){e.$set(e.params,"tarifhprg",e._n(a))},expression:"params.tarifhprg"}}):e._e(),"tempo"==e.params.type?t("v-text-field",{attrs:{light:"",type:"number",label:"Heures creuses jours rouges",suffix:"cts/kWh",min:"0"},model:{value:e.params.tarifhcrg,callback:function(a){e.$set(e.params,"tarifhcrg",e._n(a))},expression:"params.tarifhcrg"}}):e._e()],1)],1)],1)],1),t("v-expansion-panel-content",{attrs:{value:"true"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("v-icon",[e._v("search")]),e._v("\n              Comparatif\n            ")],1),t("v-data-table",{attrs:{light:"","hide-actions":"","must-sort":"",headers:e.headers,items:e.fournisseurs,pagination:e.ordre,"no-data-text":"Aucune donnée correspondante","no-results-text":"Aucun résultat correspondant",transition:"slide-y-transition"},on:{"update:pagination":function(a){e.ordre=a}},scopedSlots:e._u([{key:"items",fn:function(a){return[t("td",{class:{"red--text":a.item.vieuxTarif}},[e._v("\n                  "+e._s(a.item.date)+"\n                ")]),t("td",{class:{"red--text":a.item.vieuxTarif,green:a.item.renouvelable,teal:a.item.local&&!a.item.renouvelable,"accent-1":a.item.renouvelable&&!a.item.local||!a.item.renouvelable&&a.item.local,"accent-2":a.item.renouvelable&&a.item.local}},[t("v-tooltip",{attrs:{disabled:!a.item.note,bottom:"","max-width":"500","open-delay":"0","close-delay":"500"}},[t("span",{attrs:{slot:"activator"},slot:"activator"},[a.item.url?e._e():t("span",[e._v(e._s(a.item.offre))]),a.item.url?t("a",{attrs:{href:a.item.url,target:"_blank"}},[e._v(e._s(a.item.offre))]):e._e(),a.item.note?t("v-icon",{staticClass:"ml-2",attrs:{light:"",small:""}},[e._v("help")]):e._e()],1),t("span",{domProps:{innerHTML:e._s(a.item.note)}})])],1),t("td",{class:{green:a.item.renouvelable,teal:a.item.local&&!a.item.renouvelable,"accent-1":a.item.renouvelable&&!a.item.local||!a.item.renouvelable&&a.item.local,"accent-2":a.item.renouvelable&&a.item.local}},[e._v("\n                  "+e._s(e.humanType(a.item.type))+"\n                ")]),t("td",{staticClass:"text-xs-right"},[t("b",[e._v(e._s(a.item.total.toFixed(2).replace(".",","))+" €")])]),t("td",{staticClass:"text-xs-right"},[e._v("\n                  "+e._s(a.item.hp.toFixed(2).replace(".",","))+" cts\n                ")]),t("td",{staticClass:"text-xs-right"},["hphc"==a.item.type||"tempo"==a.item.type?t("span",[e._v(e._s(a.item.hc.toFixed(2).replace(".",","))+" cts")]):e._e()]),t("td",{staticClass:"text-xs-right"},[e._v("\n                  "+e._s(a.item.abo.toFixed(2).replace(".",","))+" €\n                ")]),e.params.ve?t("td",{staticClass:"text-xs-right"},[e._v("\n                  "+e._s(a.item.vehp.toFixed(2).replace(".",","))+" €\n                ")]):e._e(),e.params.ve?t("td",{staticClass:"text-xs-right"},["hphc"==a.item.type||"tempo"==a.item.type?t("span",[e._v(e._s(a.item.vehc.toFixed(2).replace(".",","))+" €")]):e._e()]):e._e(),e.params.total?t("td",{staticClass:"text-xs-right"},[a.item.delta<0?t("span",{staticClass:"success--text"},[e._v(e._s(a.item.delta.toFixed(2).replace(".",","))+" %")]):e._e(),a.item.delta>0?t("span",{staticClass:"error--text"},[e._v("+"+e._s(a.item.delta.toFixed(2).replace(".",","))+" %")]):e._e()]):e._e()]}}])})],1)],1)],1)],1),t("v-footer",{staticClass:"px-2",attrs:{fixed:"",app:"",height:"auto"}},[t("span",[e._v("© 2018 — Sébastien Maccagnoni")])]),t("v-snackbar",{attrs:{color:"error",timeout:6e3,top:""},model:{value:e.erreurChargementYaml,callback:function(a){e.erreurChargementYaml=a},expression:"erreurChargementYaml"}},[e._v("\n      La liste de tarifs n'a pas pu être chargée. Veuillez réessayer.\n    "),t("v-btn",{attrs:{flat:"",color:"pink"},nativeOn:{click:function(a){e.erreurChargementYaml=!1}}},[e._v("Close")])],1)],1)},p=[],m=t("XyMi");function f(e){t("+VGo")}var h=!1,v=f,d=null,b=null,x=Object(m["a"])(c,u,p,h,v,d,b),g=x.exports,_=t("3EgV"),k=t.n(_);t("7zck");s["a"].use(k.a),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(g)}}).$mount("#app")}},[0]);
//# sourceMappingURL=app.f7326050.js.map