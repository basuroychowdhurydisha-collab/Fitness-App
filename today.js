import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalDailyActivity: "",
      activities: [],
    };
  }
  static navigationOptions = {
    title: "Today",
  };

  async componentDidMount() {
    const username = this.props.navigation.state.params.username;
    const token = this.props.navigation.state.params.token;
    let response = await fetch(
      "https://avigael-shop-fitness.herokuapp.com/users/" + username,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
          "x-access-token": token,
          Connection: "keep-alive",
          "cache-control": "no-cache",
        },
      }
    );

    response = await response.json();
    let activities = await fetch(
      "https://avigael-shop-fitness.herokuapp.com/activities",
      {
        method: "GET",
        headers: {
          Accept: "*/*",
          "x-access-token": token,
          Connection: "keep-alive",
          "cache-control": "no-cache",
        },
      }
    );
    activities = await activities.json();
    this.setState({
      goalDailyActivity: response.goalDailyActivity,
      activities: activities.activities,
    });
  }

  
