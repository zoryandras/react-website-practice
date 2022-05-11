import React from 'react'
import { Container, FormButton, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormWrap, Text } from './SigninElements'

function SignIn() {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">Back to the main page</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Just add some nifty information (it's for desing anyway)</FormH1>
                        <FormLabel htmlFor="for">E-mail</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Hit it!</FormButton>
                        <Text>Forgot your password?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn