<style>
.expansion-panel__header {
  background: linear-gradient(rgba(0, 0, 0, 0.12), white);
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 2em;
}
.intro {
  border-bottom: 1px solid grey;
}
ul {
  margin-left: 2em;
}
hr {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title>
        Comparateur de tarifs d'électricité
        <span v-if="$vuetify.breakpoint.mdAndUp"> en France, indépendant et participatif</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container grid-list-sm>
        <v-alert type="warning" :value="problemesOffres.length>0" class="mb-3">
          <p>Problème<span v-if="problemesOffres.length>1">s</span> dans le fichier des tarifs&nbsp;:</p>
          <ul>
            <li v-for="probleme in problemesOffres" :key="probleme">
              {{ probleme }}
            </li>
          </ul>
        </v-alert>
        <v-expansion-panel expand light class="ml-0">
          <v-expansion-panel-content>
            <div slot="header">
              <v-icon>help</v-icon>
              Aide
            </div>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs12 class="intro">
                  <h2>Qui, quoi, comment ?</h2>
                  <v-container grid-list-lg>
                    <v-layout row wrap>
                      <v-flex xs12 sm6>
                        <p>Ce comparateur a été entièrement créé sur le temps libre de <a href="https://www.maccagnoni.eu/" target="_blank">Sébastien Maccagnoni</a>, qui n'a aucun intérêt financier dans aucun des fournisseurs d'accès cités. Informaticien, curieux et aimant les comparatifs, Sébastien créait tous les ans des tableaux afin de comparer le tarif qu'il paye à ce qu'il pourrait payer ailleurs. Dans un esprit de partage et pour exercer sa passion du développement pour un projet sympa, il a décidé de créer ce comparateur.</p>
                        <p>Attention: ce comparateur ne prend en compte que les offres électricité seules: aucune offre électricité+gaz n'est traitée. Les liens du tableau comparatif n'offrent aucune réduction d'aucune sorte, chez aucun fournisseur.</p>
                        <p>Sébastien a choisi de n'afficher aucune publicité sur ce site&nbsp;: celui-ci ne lui apporte aucune rémunération directe. Si vous trouvez ce comparateur utile et que vous souhaitez récompenser Sébastien, vous pouvez faire lui faire un don via <a href="https://www.tipeee.com/smacc">Tipeee</a>.</p>
                        <p><b>Sébastien a choisi de s'abonner au fournisseur Ilek. Si vous souhaitez suivre son choix, n'hésitez pas à passer par <a href="https://www.ilek.fr/ambassadors/88cc8848-ab5d-4c9c-a3a1-88d8de5a1cb3?referral=ILEK10995" target="_blank">ce lien de parrainage</a>&nbsp;: vos premiers 100 kWh seront offerts.</b></p>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <p>L'intérêt de ce comparateur, en face d'autres outils du même genre, est multiple&nbsp;:</p>
                        <ul>
                          <li>l'ensemble des tarifs sont manuellement vérifiés et mis à jour, au moins une fois par an, sur la base des tarifs officiels des fournisseurs&nbsp;;</li>
                          <li>les tarifs proposés sont comparés en une seule page, un grand tableau concis et complet&nbsp;;</li>
                          <li>l'ensemble des calculs sont effectués sur votre propre machine: aucune information n'est transmise au serveur, aucun cookie n'est installé, aucun "flicage" n'est possible&nbsp;;</li>
                          <li>vous pouvez comparer les tarifs avec votre facture actuelle&nbsp;;</li>
                          <li>si vous avez des idées ou des besoins, vous pouvez les soumettre &mdash; de même, si vous voulez participer, c'est possible, cherchez le menu en bas de l'écran pour en savoir plus&nbsp;!</li>
                        </ul>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
                <v-divider light />
                <v-flex xs12 md6>
                  <h2>Les paramètres</h2>
                  <p>La section "Paramètres" vous permet de renseigner votre consommation afin de pouvoir calibrer le comparateur.</p>
                  <p>Tout d'abord, indiquez votre type d'abonnement: tarif unique, HP/HC ou tempo (le comparateur ne prend pas en compte le tarif EJP)&nbsp;; ensuite, précisez la puissance nécessaire en kVA&nbsp;; enfin, renseignez votre consommation annuelle en kWh dans la colonne "Consommation annuelle".</p>
                  <p>Le champ "Facture actuelle annuelle" et la section "Prix actuel du kWh" permettent de comparer précisément votre abonnement actuel avec les offres connues du comparateur. Ceux-ci sont facultatifs.</p>
                  <h3>Options</h3>
                  <dl>
                    <dt>Inclure tarifs base</dt>
                    <dd>Afficher les offres avec un seul tarif quel que soit le moment de la journée.</dd>
                    <dt>Inclure tarifs heures pleines / heures creuses</dt>
                    <dd>Afficher les offres proposant un double tarif heures pleines / heures creuses.</dd>
                    <dt>Inclure tarifs tempo</dt>
                    <dd>Afficher les offres proposant six tarifs (jours bleu/blanc/rouge, heures pleines ou creuses).</dd>
                    <dt>Inclure anciens tarifs</dt>
                    <dd>Afficher les tarifs anciens (plus vieux qu'un an, généralement des offres non reconduites).</dd>
                    <dt>Voiture électrique : prix/100km</dt>
                    <dd>Afficher une estimation du prix de l'électricité pour 100km parcourus en voiture électrique.</dd>
                    <dt>Consommation moyenne de votre voiture</dt>
                    <dd>Consommation en kWh aux 100km de votre voiture électrique (si vous ne savez pas, 16kWh/100 serait un bon point de départ)&nbsp;; cette consommation est automatiquement majorée de 15% pour prendre en compte le rendement du chargeur.</dd>
                  </dl>
                </v-flex>
                <v-flex xs12 md6>
                  <h2>Le comparatif</h2>
                  <dl>
                    <dt>Date tarif</dt>
                    <dd>Date à laquelle le tarif a été consulté sur le site web du fournisseur</dd>
                    <dt>Offre</dt>
                    <dd>Fournisseur et nom de l'offre</dd>
                    <dt>Type</dt>
                    <dd>Type de l'offre (base, HP/HC ou tempo)</dd>
                    <dt>Total</dt>
                    <dd>Coût annuel avec l'offre, pour la consommation renseignée dans les paramètres</dd>
                    <dt>HP</dt>
                    <dd>Coût d'un kWh en heures pleines (coût unique pour un tarif "base", ou coût moyen pour un tarif tempo)</dd>
                    <dt>HC</dt>
                    <dd>Coût d'un kWh en heures creuses (inapplicable pour un tarif "base", coût moyen pour un tarif tempo)</dd>
                    <dt>Abo</dt>
                    <dd>Coût de l'abonnement annuel</dd>
                    <dt>VE HP (optionnel)</dt>
                    <dd>Coût pour 100km parcourus avec une voiture électrique chargée en heures pleines</dd>
                    <dt>VE HC (optionnel)</dt>
                    <dd>Coût pour 100km parcourus avec une voiture électrique chargée en heures creuses</dd>
                    <dt>Delta (optionnel)</dt>
                    <dd>Différence (en pourcents) entre votre tarif total actuel et le tarif affiché</dd>
                  </dl>
                  <hr />
                  <ul>
                    <li>Tous les prix annoncés sont TTC</li>
                    <li>Les lignes en rouge représentent des tarifs anciens, généralement à ignorer</li>
                    <li>Les offres sur fond vert clair sont des offres "énergie 100% renouvelable"</li>
                    <li>Les offres sur fond vert foncé sont des offres "renouvelable et local", permettant un "circuit court"</li>
                    <li>Lorsque des offres sont complexes (offres "week-end" par exemple), le simulateur répartit les consommations de manière lissée, comme si vous consommiez autant à tous les moments &mdash; bien sûr, si vous avez précisé vos consommations HP et HC, celles-ci restent prises en compte.</li>
                  </ul>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <h2>Revenir sur le comparateur</h2>
                  <p>Pour revenir sur le comparateur en gardant vos paramètres, enregistez simplement l'adresse courante dans vos marque-pages, celle-ci change selon vos paramètres. Actuellement, l'adresse à utiliser pour revenir avec vos paramètres est la suivante&nbsp;:</p>
                  <p><a :href="adresseActuelle">{{ adresseActuelle }}</a></p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-expansion-panel-content>
          <v-expansion-panel-content value="true">
            <div slot="header">
              <v-icon>settings</v-icon>
              Paramètres
            </div>
            <v-container grid-list-lg class="px-4">
              <v-layout row wrap>
                <v-flex xs12 md4>
                  <v-subheader light>Abonnement</v-subheader>
                  <v-select light :items="types" v-model="params.type" label="Type d'abonnement" single-line />
                  <v-select light :items="puissances" v-model="params.puissance" label="Puissance" single-line />
                  <v-text-field light type="number" label="Facture actuelle annuelle (facultatif)" v-model.number="params.total" suffix="€/an" min="0" />
                  <v-subheader light>Options</v-subheader>
                  <v-checkbox light label="Inclure tarifs base" v-model="params.base" />
                  <v-checkbox light label="Inclure tarifs heures pleines / heures creuses" v-model="params.hphc" />
                  <v-checkbox light label="Inclure tarifs tempo" v-model="params.tempo" />
                  <v-checkbox light label="Uniquement électricité renouvelable" v-model="params.renouvelable" />
                  <v-checkbox light label="Uniquement production locale" v-model="params.local" />
                  <v-checkbox light label="Inclure anciens tarifs" v-model="params.anciens" />
                  <v-container class="pa-0">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-checkbox  light label="Voiture électrique : prix/100km" v-model="params.ve" />
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field light type="number" label="Consommation moyenne de votre voiture" v-model.number="params.consove" suffix="kWh/100km" hint="Sera majorée de 15% (rendement du chargeur)" min="0" v-if="params.ve" />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
                <v-flex xs12 md4>
                  <v-subheader light>Consommation annuelle</v-subheader>
                  <v-text-field light type="number" :label="labelHP" v-model.number="params.conso" suffix="kWh/an" min="0" />
                  <v-text-field light type="number" :label="labelHC" v-model.number="params.consohc" suffix="kWh/an" min="0" v-if="params.type=='hphc' || params.type=='tempo'" />
                  <v-text-field light type="number" label="Heures pleines jours blancs" v-model.number="params.consohpbc" suffix="kWh/an" min="0" v-if="params.type=='tempo'" />
                  <v-text-field light type="number" label="Heures creuses jours blancs" v-model.number="params.consohcbc" suffix="kWh/an" min="0" v-if="params.type=='tempo'" />
                  <v-text-field light type="number" label="Heures pleines jours rouges" v-model.number="params.consohprg" suffix="kWh/an" min="0" v-if="params.type=='tempo'" />
                  <v-text-field light type="number" label="Heures creuses jours rouges" v-model.number="params.consohcrg" suffix="kWh/an" min="0" v-if="params.type=='tempo'" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-subheader light>Prix actuel du kWh (facultatif)</v-subheader>
                  <v-text-field light type="number" :label="labelHP" v-model.number="params.tarif" suffix="cts/kWh" min="0" />
                  <v-text-field light type="number" :label="labelHC" v-model.number="params.tarifhc" suffix="cts/kWh" min="0" v-if="params.type=='hphc' || params.type=='tempo'" />
                  <v-text-field light type="number" label="Heures pleines jours blancs" v-model.number="params.tarifhpbc" suffix="cts/kWh" min="0" v-if="params.type=='tempo'" />
                  <v-text-field light type="number" label="Heures creuses jours blancs" v-model.number="params.tarifhcbc" suffix="cts/kWh" min="0" v-if="params.type=='tempo'" />
                  <v-text-field light type="number" label="Heures pleines jours rouges" v-model.number="params.tarifhprg" suffix="cts/kWh" min="0" v-if="params.type=='tempo'" />
                  <v-text-field light type="number" label="Heures creuses jours rouges" v-model.number="params.tarifhcrg" suffix="cts/kWh" min="0" v-if="params.type=='tempo'" />
                </v-flex>
              </v-layout>
            </v-container>
          </v-expansion-panel-content>
          <v-expansion-panel-content value="true">
            <div slot="header">
              <v-icon>search</v-icon>
              Comparatif
            </div>
            <v-data-table
              light
              hide-actions
              must-sort
              :headers="headers"
              :items="fournisseurs"
              :pagination.sync="ordre"
              no-data-text="Aucune donnée correspondante"
              no-results-text="Aucun résultat correspondant"
              transition="slide-y-transition"
            >
              <template slot="items" slot-scope="props" transition="slide-y-transition">
                <td :class="{'red--text': props.item.vieuxTarif}">
                  {{ props.item.date }}
                </td>
                <td :class="{
                  'red--text': props.item.vieuxTarif,
                  'green': props.item.renouvelable,
                  'teal': props.item.local&&!props.item.renouvelable,
                  'accent-1': (props.item.renouvelable&&!props.item.local)||(!props.item.renouvelable&&props.item.local),
                  'accent-2': props.item.renouvelable&&props.item.local
                }">
                  <v-tooltip :disabled="!props.item.note" bottom max-width="500" open-delay="0" close-delay="500">
                    <span slot="activator">
                      <span v-if="!props.item.url">{{ props.item.offre }}</span>
                      <a :href="props.item.url" target="_blank" v-if="props.item.url">{{ props.item.offre }}</a>
                      <v-icon light small class="ml-2" v-if="props.item.note">help</v-icon>
                    </span>
                    <span v-html="props.item.note" />
                  </v-tooltip>
                </td>
                <td :class="{
                  'green': props.item.renouvelable,
                  'teal': props.item.local&&!props.item.renouvelable,
                  'accent-1': (props.item.renouvelable&&!props.item.local)||(!props.item.renouvelable&&props.item.local),
                  'accent-2': props.item.renouvelable&&props.item.local
                }">
                  {{ humanType(props.item.type) }}
                </td>
                <td class="text-xs-right">
                  <b>{{ props.item.total.toFixed(2).replace(".", ",") }}&nbsp;€</b>
                </td>
                <td class="text-xs-right">
                  {{ props.item.hp.toFixed(2).replace(".", ",") }}&nbsp;cts
                </td>
                <td class="text-xs-right">
                  <span v-if="props.item.type == 'hphc' || props.item.type == 'tempo'">{{ props.item.hc.toFixed(2).replace(".", ",") }}&nbsp;cts</span>
                </td>
                <td class="text-xs-right">
                  {{ props.item.abo.toFixed(2).replace(".", ",") }}&nbsp;€
                </td>
                <td class="text-xs-right" v-if="params.ve">
                  {{ props.item.vehp.toFixed(2).replace(".", ",") }}&nbsp;€
                </td>
                <td class="text-xs-right" v-if="params.ve">
                  <span v-if="props.item.type == 'hphc' || props.item.type == 'tempo'">{{ props.item.vehc.toFixed(2).replace(".", ",") }}&nbsp;€</span>
                </td>
                <td class="text-xs-right" v-if="params.total">
                  <span v-if="props.item.delta<0" class="success--text">{{ props.item.delta.toFixed(2).replace(".", ",") }}&nbsp;%</span>
                  <span v-if="props.item.delta>0" class="error--text">+{{ props.item.delta.toFixed(2).replace(".", ",") }}&nbsp;%</span>
                </td>
              </template>
            </v-data-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-container>
    </v-content>
    <v-footer fixed app height="auto" class="px-2 hidden-xs-only">
      <span>
        &copy; 2018 &mdash;
        <a class="primary--text text--lighten-3" href="https://www.maccagnoni.eu">Sébastien Maccagnoni</a> &mdash;
        <a class="primary--text text--lighten-3" href="https://github.com/tiramiseb/comparateur-electricite">projet sous licence AGPL</a>
      </span>
      <v-spacer/>
      <v-menu top offset-y transition="slide-y-reverse-transition">
        <v-btn color="info" slot="activator">Participer</v-btn>
        <v-list light>
          <v-list-tile href="https://github.com/tiramiseb/comparateur-electricite/issues/new?template=erreur" target="_blank">
            <v-list-tile-title>Signaler une erreur</v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="https://github.com/tiramiseb/comparateur-electricite/issues/new?template=nouveau_fournisseur" target="_blank">
            <v-list-tile-title>Proposer un nouveau fournisseur</v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="https://github.com/tiramiseb/comparateur-electricite/issues/new?template=nouveau_tarif" target="_blank">
            <v-list-tile-title>Signaler un changement de tarif</v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="https://github.com/tiramiseb/comparateur-electricite/issues/new?template=amelioration" target="_blank">
            <v-list-tile-title>Suggérer une amélioration</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn color="info" href="https://www.tipeee.com/smacc" target="_blank">Faire un don</v-btn>
    </v-footer>
      <v-snackbar color="error" :timeout="6000" top v-model="erreurChargementYaml">
        La liste de tarifs n'a pas pu être chargée. Veuillez réessayer.
      <v-btn flat color="pink" @click.native="erreurChargementYaml = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import yaml from "js-yaml";
function dernierPrix(offre, puissance) {
  // On parcourt les tarifs, du plus récent au plus ancien, à la recherche d'un ensemble abonnement+tarifs kWh qui existe pour la puissance demandée
  for (let i = offre.prix.length - 1; i >= 0; i--) {
    const prix = offre.prix[i];
    let abo = prix.abo[puissance],
      hp = prix.hp[puissance];
    // Si pas d'abonnement pour cette puissance ou pour "x" ("tous les tarifs"), on passe
    if (!abo) {
      abo = prix.abo["x"];
      if (!abo) {
        continue;
      }
    }
    // Idem pour le prix "heures pleines", qui doit toujous être présent
    if (!hp) {
      hp = prix.hp["x"];
      if (!hp) {
        continue;
      }
    }
    // Pour un tarif "base", il n'y a pas besoin de plus que ça...
    if (offre.type != "hphc" && offre.type != "tempo") {
      return {
        date: prix.date,
        hp: hp,
        abo: abo
      };
    }
    // Idem pour le prix "heures pleines"...
    let hc = prix.hc[puissance];
    if (!hc) {
      hc = prix.hc["x"];
      if (!hc) {
        continue;
      }
    }
    // En tarif HPHC, il n'y a pas besoin de plus...
    if (offre.type == "hphc") {
      return {
        date: prix.date,
        hc: hc,
        hp: hp,
        abo: abo
      };
    }
    // Enfin, en tempo, il faut vérifier tous les prix
    let hcbc = prix.hcbc[puissance],
      hpbc = prix.hpbc[puissance],
      hcrg = prix.hcrg[puissance],
      hprg = prix.hprg[puissance];
    if (!hcbc) {
      hcbc = prix.hcbc["x"];
      if (!hcbc) {
        continue;
      }
    }
    if (!hpbc) {
      hpbc = prix.hpbc["x"];
      if (!hpbc) {
        continue;
      }
    }
    if (!hcrg) {
      hcrg = prix.hcrg["x"];
      if (!hcrg) {
        continue;
      }
    }
    if (!hprg) {
      hprg = prix.hprg["x"];
      if (!hprg) {
        continue;
      }
    }
    // Tous les tarifs sont ok, on peut retourer le tarif tempo
    if (offre.type == "tempo") {
      return {
        date: prix.date,
        hc: hc,
        hp: hp,
        hcbc: hcbc,
        hpbc: hpbc,
        hcrg: hcrg,
        hprg: hprg,
        abo: abo
      };
    }
  }
  // Si aucun tarif n'a été retourné, on retourne "rien"
  return null;
}
export default {
  name: "App",
  data: () => ({
    params: {
      tarif: 0,
      tarifhc: 0,
      tarifhpbc: 0,
      tarifhcbc: 0,
      tarifhprg: 0,
      tarifhcrg: 0,
      conso: 0,
      consohc: 0,
      consohpbc: 0,
      consohcbc: 0,
      consohprg: 0,
      consohcrg: 0,
      type: "",
      puissance: "",
      total: 0,
      base: false,
      hphc: false,
      tempo: false,
      renouvelable: false,
      local: false,
      anciens: false,
      ve: false,
      consove: 0
    },
    pivot: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365),
    ordre: { sortBy: "total", descending: false, rowsPerPage: -1 },
    erreurChargementYaml: false,
    adresseActuelle: "",
    types: [
      { text: "Tarif unique", value: "base" },
      { text: "HP / HC", value: "hphc" },
      { text: "Tempo", value: "tempo" }
    ],
    puissances: [
      { text: "3 kVA", value: "3" },
      { text: "6 kVA", value: "6" },
      { text: "9 kVA", value: "9" },
      { text: "12 kVA", value: "12" },
      { text: "15 kVA", value: "15" },
      { text: "18 kVA", value: "18" },
      { text: "24 kVA", value: "24" },
      { text: "30 kVA", value: "30" },
      { text: "36 kVA", value: "36" }
    ],
    origTarifs: [],
    fournisseurs: [],
    problemesOffres: []
  }),
  created() {
    var vm = this;
    // Récupérer la configuration dans l'URL
    this.urlVersParams();
    // Récupérer la liste des tarifs
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status != 200) {
          vm.erreurChargementYaml = true;
          return;
        }
        try {
          vm.origTarifs = yaml.safeLoad(this.responseText);
        } catch (e) {
          vm.erreurChargementYaml = true;
          console.error(e); // eslint-disable-line no-console
          return;
        }
        vm.recalculer();
      }
    };
    req.open("GET", "tarifs.yaml", true);
    req.send(null);
  },
  watch: {
    params: {
      deep: true,
      handler: function() {
        this.recalculer();
      }
    }
  },
  computed: {
    headers() {
      var headers = [
        {
          text: "Date tarif",
          align: "left",
          value: "date"
        },
        {
          text: "Offre",
          align: "left",
          value: "offre"
        },
        {
          text: "Type",
          align: "left",
          value: "type"
        },
        {
          text: "Total",
          align: "right",
          value: "total"
        },
        {
          text: "HP",
          align: "right",
          value: "hp"
        },
        {
          text: "HC",
          align: "right",
          value: "hc"
        },
        {
          text: "Abo",
          align: "right",
          value: "abo"
        }
      ];
      if (this.params.ve) {
        headers.push({
          text: "VE HP",
          align: "right",
          value: "vehp"
        });
        headers.push({
          text: "VE HC",
          align: "right",
          value: "vehc"
        });
      }
      if (this.params.total != 0) {
        headers.push({
          text: "Delta",
          align: "right",
          value: "delta"
        });
      }
      return headers;
    },
    labelHP() {
      switch (this.params.type) {
        case "hphc":
          return "Heures pleines";
        case "tempo":
          return "Heures pleines jour bleu";
      }
      return "";
    },
    labelHC() {
      switch (this.params.type) {
        case "hphc":
          return "Heures creuses";
        case "tempo":
          return "Heures creuses jour bleu";
      }
      return "";
    }
  },
  methods: {
    humanType(type) {
      switch (type) {
        case "hphc":
          return "HP/HC";
        case "tempo":
          return "Tempo";
      }
      return "Base";
    },
    recalculer() {
      var fournisseurs = [],
        nbkwhHP,
        nbkwhHC;
      this.problemesOffres = [];

      // D'abord, on calcule la quantité de kWh consommés, selon le type actuel de tarification
      // L'objectif est d'obtenir des kWh HP et des kWh HC. On ne rentre pas plus dans le détail, restons simples...
      switch (this.params.type) {
        case "hphc":
          nbkwhHP = this.params.conso;
          nbkwhHC = this.params.consohc;
          break;
        case "tempo":
          nbkwhHP =
            this.params.conso + this.params.consohpbc + this.params.consohprg;
          nbkwhHC =
            this.params.consohc + this.params.consohcbc + this.params.consohcrg;
          break;
        default:
          nbkwhHP = this.params.conso / 3 * 2;
          nbkwhHC = this.params.conso / 3;
          break;
      }
      var vm = this;
      this.origTarifs.forEach(tarif => {
        // On exclut immédiatement l'offre si elle ne correspond pas à la requête
        if (
          (this.params.renouvelable && !tarif.renouvelable) ||
          (this.params.local && !tarif.local) ||
          (tarif.type == "base" && !this.params.base) ||
          (tarif.type == "hphc" && !this.params.hphc) ||
          (tarif.type == "tempo" && !this.params.tempo)
        ) {
          return;
        }

        // Trouvons les derniers prix pour la puissance demandée...
        var prix = dernierPrix(tarif, this.params.puissance),
          date = new Date();
        if (!prix) {
          // Aucun prix ne correspond, on laisse tomber ce tarif
          return;
        }
        if (!prix.date) {
          vm.problemesOffres.push("Date manquante pour l'offre " + tarif.offre);
          return;
        }

        try {
          var datestring = prix.date.toString();
        } catch (e) {
          vm.problemesOffres.push(
            "Mauvais format pour la date de l'offre " + tarif.offre
          );
          return;
        }
        if (datestring.length != 8) {
          vm.problemesOffres.push(
            "Mauvais format pour la date de l'offre " + tarif.offre
          );
          return;
        }

        // On extrait la date et on la transforme en objet Date
        var year = parseInt(prix.date.toString().substr(0, 4)),
          month = parseInt(prix.date.toString().substr(4, 2)) - 1,
          day = parseInt(prix.date.toString().substr(6, 2));
        date.setFullYear(year, month, day);

        // On ignore les anciens tarifs si les paramètres demandent les récents uniquement
        if (date < this.pivot && !this.params.anciens) return;

        // Et on génère une ligne pour chaque fournisseur
        var fournisseur = {
          offre: tarif.offre,
          type: tarif.type,
          renouvelable: tarif.renouvelable,
          local: tarif.local,
          abo: prix.abo,
          vieuxTarif: date < this.pivot,
          date: date.toLocaleDateString()
        };
        if (tarif.url && tarif.url != "") {
          fournisseur.url = tarif.url;
        }
        if (tarif.note && tarif.note != "") {
          fournisseur.note = tarif.note;
        }
        if (!prix.abo) {
          vm.problemesOffres.push(
            "Prix de l'abonnement manquant pour l'offre " + tarif.offre
          );
          return;
        }
        if (!prix.hp) {
          vm.problemesOffres.push(
            "Prix HP manquant pour l'offre " + tarif.offre
          );
          return;
        }
        switch (tarif.type) {
          case "hphc":
            if (!prix.hc) {
              vm.problemesOffres.push(
                "Prix HC manquant pour l'offre " + tarif.offre
              );
              return;
            }
            fournisseur.hp = prix.hp;
            fournisseur.hc = prix.hc;
            break;
          case "tempo":
            if (!prix.hc) {
              vm.problemesOffres.push(
                "Prix HC manquant pour l'offre " + tarif.offre
              );
              return;
            }
            if (!prix.hcbc) {
              vm.problemesOffres.push(
                "Prix HC jours blancs manquant pour l'offre " + tarif.offre
              );
              return;
            }
            if (!prix.hpbc) {
              vm.problemesOffres.push(
                "Prix HP jours blancs manquant pour l'offre " + tarif.offre
              );
              return;
            }
            if (!prix.hcrg) {
              vm.problemesOffres.push(
                "Prix HC jours rouges manquant pour l'offre " + tarif.offre
              );
              return;
            }
            if (!prix.hprg) {
              vm.problemesOffres.push(
                "Prix HP jours rouges manquant pour l'offre " + tarif.offre
              );
              return;
            }
            fournisseur.hp =
              (prix.hp * 300 + prix.hpbc * 43 + prix.hprg * 22) / 365;
            fournisseur.hc =
              (prix.hc * 300 + prix.hcbc * 43 + prix.hcrg * 22) / 365;
            break;
          default:
            // Base
            fournisseur.hp = prix.hp;
            fournisseur.hc = prix.hp;
            break;
        }
        fournisseur.total =
          fournisseur.abo +
          fournisseur.hp * nbkwhHP / 100 +
          fournisseur.hc * nbkwhHC / 100;
        fournisseur.vehp = fournisseur.hp * this.params.consove * 1.15 / 100;
        fournisseur.vehc = fournisseur.hc * this.params.consove * 1.15 / 100;
        fournisseur.delta = fournisseur.total * 100 / this.params.total - 100;
        fournisseurs.push(fournisseur);
      });
      this.fournisseurs = fournisseurs;

      // Finalement, on génère l'URL pour que l'utilisateur puisse revenir quand il veut avec ses paramètres
      this.paramsVersUrl();
    },
    urlVersParams() {
      const query = document.location.search.substr(1).split("&");
      var hasTypeOption = false;
      query.forEach(param => {
        const kv = param.split("="),
          paramType = typeof this.params[kv[0]];
        if (kv.length == 1 && paramType == "boolean") {
          // Params without value are boolean with value true
          if (kv[0] == "base" || kv[0] == "hphc" || kv[0] == "tempo")
            hasTypeOption = true;
          this.params[kv[0]] = true;
          return;
        }
        switch (paramType) {
          case "boolean":
            if (kv[1] == "false") {
              this.params[kv[0]] = false;
              if (kv[0] == "base" || kv[0] == "hphc" || kv[0] == "tempo")
                hasTypeOption = true;
            } else {
              this.params[kv[0]] = true;
              if (kv[0] == "base" || kv[0] == "hphc" || kv[0] == "tempo")
                hasTypeOption = true;
            }
            break;
          case "number":
            if (!isNaN(parseInt(kv[1])) && parseInt(kv[1]) != 0) {
              this.params[kv[0]] = parseInt(kv[1]);
            }
            break;
          case "string":
            this.params[kv[0]] = kv[1];
            break;
        }
      });
      // Sans type sélectionné, tout afficher
      if (!hasTypeOption) {
        this.params.base = true;
        this.params.hphc = true;
        this.params.tempo = true;
      }
      // Si l'abonnement n'est pas choisi, prendre "base 6kVA par défaut"
      if (!this.params.type) this.params.type = "base";
      if (!this.params.puissance) this.params.puissance = "6";
    },
    paramsVersUrl() {
      var query = [];
      Object.keys(this.params).forEach(key => {
        var type = typeof this.params[key],
          value = this.params[key];
        // TODO
        switch (type) {
          case "boolean":
            if (value) query.push(key);
            break;
          case "string":
            query.push(key + "=" + value);
            break;
          case "number":
            if (value != 0) query.push(key + "=" + value);
            break;
        }
      });
      var url = window.location.href.split("?")[0],
        params = query.join("&");
      this.adresseActuelle = `${url}?${params}`;
      window.history.replaceState({}, "", this.adresseActuelle);
    }
  }
};
</script>
