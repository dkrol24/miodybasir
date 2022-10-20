import { List, ListItem, TextField } from "@mui/material";
import axios from "axios";
import jsCookie from "js-cookie";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React, { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { getError } from "../utils/error";
import { Store } from "../utils/Store";

function ProfileScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (!userInfo) {
      return router.push("/login");
    }
    setValue("name", userInfo.name);
    setValue("email", userInfo.email);
  }, [router, setValue, userInfo]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    closeSnackbar();
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: "error" });
      return;
    }
    try {
      const { data } = await axios.put(
        "/api/users/profile",
        {
          name,
          email,
          password,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: "USER_LOGIN", payload: data });
      jsCookie.set("userInfo", JSON.stringify(data));
      enqueueSnackbar("Profile updated successfully", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };
  return (
    <Layout title="Profile">
      <div className="productdetails-banner" />
      <div className="loginregister">
        <h1 className="banner-h1">Profil</h1>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <List>
            <ListItem>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    style={{
                      padding: "0",
                      margin: "0",
                      border: "3px solid rgba(222,151,9,255)",
                      background: "white",
                    }}
                    variant="filled"
                    color="none"
                    fullWidth
                    placeholder="Nazwa"
                    id="name"
                    inputProps={{ type: "text" }}
                    error={Boolean(errors.name)}
                    helperText={
                      errors.name
                        ? errors.name.type === "minLength"
                          ? "Nazwa musi zawierać co najmniej jeden znak"
                          : "To pole jest wymagane"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <TextField
                    style={{
                      padding: "0",
                      margin: "0",
                      border: "3px solid rgba(222,151,9,255)",
                      background: "white",
                    }}
                    variant="filled"
                    color="none"
                    fullWidth
                    placeholder="E-mail"
                    id="email"
                    d
                    inputProps={{ type: "email" }}
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === "pattern"
                          ? "To nie wygląda jak adres e-mail"
                          : "To pole jest wymagane"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  validate: (value) =>
                    value === "" ||
                    value.length > 5 ||
                    "Hasło musi być dłuższe niż 5 znaków",
                }}
                render={({ field }) => (
                  <TextField
                    style={{
                      padding: "0",
                      margin: "0",
                      border: "3px solid rgba(222,151,9,255)",
                      background: "white",
                    }}
                    variant="filled"
                    color="none"
                    fullWidth
                    placeholder="Hasło"
                    id="password"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? "Hasło musi być dłuższe niż 5 znaków"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  validate: (value) =>
                    value === "" ||
                    value.length > 5 ||
                    "Hasło musi być dłuższe niż 5 znaków",
                }}
                render={({ field }) => (
                  <TextField
                    style={{
                      padding: "0",
                      margin: "0",
                      border: "3px solid rgba(222,151,9,255)",
                      background: "white",
                    }}
                    variant="filled"
                    color="none"
                    fullWidth
                    placeholder="Powtórz hasło"
                    id="confirmPassword"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.confirmPassword)}
                    helperText={
                      errors.confirmPassword
                        ? "Hasło musi być dłuższe niż 5 znaków"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <button type="submit" className="yellow-button">
                Aktualizuj
              </button>
            </ListItem>
          </List>
        </Form>
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(ProfileScreen), { ssr: false });
