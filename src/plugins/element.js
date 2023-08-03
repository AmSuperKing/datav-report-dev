import Vue from 'vue'
import {
  Row,
  Col,
  Button,
  Card,
  Menu,
  MenuItem,
  Radio,
  RadioButton,
  RadioGroup,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message