import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { useForm, Controller } from "react-hook-form";
import NextLink from "next/link";
import Form from "../components/Form";
import { Link, List, ListItem, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import axios from "axios";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import { getError } from "../utils/error";

export default function RegisterScreen() {
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

  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: "error" });
      return;
    }
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
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
    <Layout title="Rejestracja">
      <div className="loginregister">
        <Form onSubmit={handleSubmit(submitHandler)}>
          <h1 className="banner-h1">Zarejestruj się</h1>
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
                    id="name"
                    placeholder="Nazwa"
                    inputProps={{ type: "name" }}
                    error={Boolean(errors.name)}
                    helperText={
                      errors.name
                        ? errors.name.type === "minLength"
                          ? "Nazwa musi mieć więcej niż 1 znak"
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
                    id="email"
                    placeholder="E-mail"
                    inputProps={{ type: "email" }}
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === "pattern"
                          ? "Nie wygląda to jak adres e-mail"
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
                    color="none"
                    variant="filled"
                    fullWidth
                    id="password"
                    placeholder="Hasło"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === "minLength"
                          ? "Hasło musi zawierać co najmniej 5 znaków"
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
                name="confirmPassword"
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
                    variant="filled"
                    color="none"
                    fullWidth
                    id="confirmPassword"
                    placeholder="Powtórz hasło"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.confirmPassword)}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword.type === "minLength"
                          ? "Hasło musi zawierać co najmniej 5 znaków"
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
                Zarejestruj się
              </button>
            </ListItem>
            <ListItem>
              <p style={{ margin: "0", color: "white" }}>Masz już konto?</p>
              <NextLink href={`/login?redirect=${redirect || "/"}`} passHref>
                <Link style={{ color: "rgba(222,151,9,255)" }}>
                  Zaloguj się
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </Form>
      </div>
    </Layout>
  );
}
