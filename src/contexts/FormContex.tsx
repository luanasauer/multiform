import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string
}
type Action = {
    type: FormActions;
    payload: any;
}
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode;
}
const initialData: State = {
    currentStep: 0,
    name: "",
    level: 0,
    email: "",
    github: ""
}

// Criar o Contex
const FormContex = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
// o reducer sempre recebe os dados executa a ação e retorna os dados novamente
const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload }//clonou o state e trocou o currentStep. Payload são os dados que serão trocados
        case FormActions.setName:
            return { ...state, name: action.payload }
        case FormActions.setLevel:
            return { ...state, level: action.payload }
        case FormActions.setEmail:
            return { ...state, email: action.payload }
        case FormActions.setGithub:
            return { ...state, github: action.payload }
        default:
            return state;
    }
}

//Provider (ambiente geral) dando acesso aos dados do contexto
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContex.Provider value={value}>
            {children}
        </FormContex.Provider>
    );
}

//context Hook
export const useForm = () => {
    const context = useContext(FormContex);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do formProvider');
    }
    return context;
}