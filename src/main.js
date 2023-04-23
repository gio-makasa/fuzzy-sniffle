import { createApp } from 'vue'
import App from './App.vue'

import InfoBox from './components/main/InfoBox.vue'
import LeaderBoard from './components/main/LeaderBoard.vue'
import PrizesList from './components/main/PrizesList.vue'

const app = createApp(App)
app.component('InfoBox', InfoBox)
app.component('LeaderBoard', LeaderBoard)
app.component('PrizesList', PrizesList)
app.mount('#app')
