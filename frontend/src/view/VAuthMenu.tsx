import "../styles.css";
import { Formik, Form, Field } from "formik";
import { CAuthMenu } from "./CAuthMenu";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";

export default function VAuthMenu(
    isActive: boolean,
    ucAuthorizeUSer:UCAuthorizeUser
) {

    if (!isActive) return;
    const {tryUserAuthorization} = CAuthMenu(ucAuthorizeUSer);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-4">Order APP</h1>
            <h2 className="text-2xl mb-6">Log in to contiue</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    tryUserAuthorization(values);
                }}
            >
                {() => (
                    <Form className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
                        <Field type="username" name="username" placeholder="username" className="my-1 px-6 py-3 rounded-md flex flex-row items-center gap-2 justify-center"/>
                        <Field type="password" name="password" placeholder="password" className="my-1 px-6 py-3 rounded-md flex flex-row items-center gap-2 justify-center"/>
                        <button type="submit" className="my-1 px-6 py-3 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
