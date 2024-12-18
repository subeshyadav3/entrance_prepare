import React from 'react';
import { getScores, account } from '../authentication/server';

const UserDashboard = () => {
    const [name, setName] = React.useState('')
    const [gmail, setGmail] = React.useState('')
    const [score, setScore] = React.useState([])
    const [registara, setRegistara] = React.useState('')
    const [password, setPassword] = React.useState('')
    React.useEffect(() => {
        const getScore = async () => {
            try {
                const result = await getScores();
                
                setScore(result)
            } catch (error) {
                console.log(error)
            }

        }

        getScore();

        const getAccount = async () => {
            const result = await account.get();
            
            setName(result.name)
            setGmail(result.email)
            setRegistara((result.registration).slice(0,10))
            setPassword((result.passwordUpdate).slice(0,10))
            
        }
        
        getAccount();

    }, []);


    return (
        <div className='flex flex-col items-center  mt-10   h-[400px] '>
            <div className='flex flex-col shadow-lg p-5'> 
                <h1 className='text-3xl mb-5'>Users Details</h1>
            <h1>Name: {name}</h1>
            <h1>Gmail: {gmail}</h1>
            <h1>Scores: [{score.join(',')}]</h1>
            <h1>Registration at: {registara}</h1>
            <h1>Password Update at: {password}</h1>
            </div>

        </div>
    );
};

export default UserDashboard;