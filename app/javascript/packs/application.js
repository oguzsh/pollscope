import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import mount from '../mount';
import "channels"

// React Components
// import UserContainer from "../components/User/user_container"
import PollsContainer from "../components/Poll/polls_container"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

mount({PollsContainer})