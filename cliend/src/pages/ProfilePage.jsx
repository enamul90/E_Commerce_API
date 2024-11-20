
import Layout from "../components/layout/Layout.jsx";
import UserStore from "../store/UserStor.js";
import {useEffect} from "react";

const ProfilePage = () => {
    const {reqProfileData, profileData } = UserStore()
    useEffect(() => {
        (async () => {
            await reqProfileData()
        })()
    }, []);

    console.log(profileData);

    return (
        <Layout>

            <h1>Home</h1>

        </Layout>
    );
};

export default ProfilePage;