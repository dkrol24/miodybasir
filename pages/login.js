import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { useForm, Controller } from "react-hook-form";
import NextLink from "next/link";
import Form from "../components/Form";
import { Link, List, ListItem, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import axios from "axios";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import { getError } from "../utils/error";

export default function LoginScreen() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (userInfo) {
      router.push(redirect || "/");
    }
  }, [router, userInfo, redirect]);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { enqueueSnackbar } = useSnackbar();
  const submitHandler = async ({ email, password }) => {
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      dispatch({ type: "USER_LOGIN", payload: data });
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push(redirect || "/");
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };
  return (
    <Layout
      title="Zaloguj - Miody Konarscy"
      description="Miody Warka - Miody Konarscy"
    >
      <div className="loginregister">
        <Form onSubmit={handleSubmit(submitHandler)}>
          <h1 className="banner-h1">Zaloguj się</h1>
          <List>
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
                    id="email"
                    placeholder="E-mail"
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
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    style={{
                      padding: "0",
                      margin: "0",
                      border: "3px solid rgba(222,151,9,255)",
                      background: "white",
                    }}
                    fullWidth
                    variant="filled"
                    color="none"
                    id="password"
                    placeholder="Hasło"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === "minLength"
                          ? "Hasło musi zawierać więcej niż 5 znaków"
                          : "To pole jest wymagane"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <button type="submit" className="yellow-button">
                Zaloguj się
              </button>
            </ListItem>
            <ListItem>
              <p style={{ margin: "0", color: "white" }}>Nie masz konta?</p>
              <NextLink href={`/register?redirect=${redirect || "/"}`} passHref>
                <Link style={{ color: "rgba(222,151,9,255)" }}>
                  Zarejestruj się
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </Form>
      </div>
    </Layout>
  );
}
