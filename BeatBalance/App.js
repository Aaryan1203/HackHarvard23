// import React from 'react';
// import { ConnectToTerraButton } from "@tryterra/terra-ui";
// import axios from "axios";
// import { Linking } from 'react-native';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center h-screen justify-center bg-white">
//       <ConnectToTerraButton
//         onClick={async () => {
//           const url = (
//             await axios.get("http://localhost:3000/api/generateWidgetSession")
//           ).data.url;
//           Linking.openURL(url);
//         }}
//       />
//     </div>
//   );
// }

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

export default function Home() {
  const handleConnectPress = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/generateWidgetSession');
      const url = response.data.url;
      Linking.openURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <TouchableOpacity onPress={handleConnectPress}>
        <Text>Connect to Terra</Text>
      </TouchableOpacity>
    </View>
  );
}