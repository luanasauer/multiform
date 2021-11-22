import { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContex';
import * as C from './styles';

export const FormStep1 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/step2');
        } else {
            alert("Preencha os dados.");
        }
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {//HTMLInputElement - diz que é um evento de mudança de um input dando acesso ao e.target
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />
                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>

    );
}