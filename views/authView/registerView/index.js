import React, { useEffect } from "react";
import { View } from "react-native";
import Form from "../../../components/generics/form";
import Input from "../../../components/generics/form/inputs";
import Link from "../../../components/generics/links";

import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form onSubmit={() => {}}>
        <Input name="first_name" label="First Name" type="text" />
        <Input name="last_name" label="Last Name" type="text" />
        <Input name="email" label="Email" type="email" />
        <Input name="password" type="password" label="Password" minLength={8} />
      </Form>
      <View>
        <Link
          onPress={async () => {
            navigate.push("Login");
          }}
        >
          Already have an account? Login here
        </Link>
      </View>
    </View>
  );
};

export default Register;
