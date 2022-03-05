import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import mount from '../mount';
import '@assets/stylesheets/application.css';
import '@assets/stylesheets/reset.css'

// React Components
// import UserContainer from "../components/User/user_container"
import PollsContainer from "../components/Poll/polls_container.tsx"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

mount({PollsContainer})
