import { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContex';
import * as C from './styles';

export const FormStep3 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert("Preencha os dados");
        }

    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {//HTMLInputElement - diz que é um evento de mudança de um input dando acesso ao e.target
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handlegithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos? </h1>
                <p>Preencha com seus dados para falarmos com você.</p>
                <hr />
                <label>
                    Qual seu e-mail
                    <input
                        type="text"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Qual seu GitHub
                    <input
                        type="text"
                        value={state.github}
                        onChange={handlegithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton" >Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>

    );
}