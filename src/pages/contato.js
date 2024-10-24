import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { useState, useEffect  } from 'react';
import { sendContactMail } from "@/services/sendMail";
import { toast } from "react-hot-toast";
import { Pinwheel } from '@uiball/loaders'

<Pinwheel
    size={35}
    lineWeight={3.5}
    speed={1}
    color="black"
/>

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(false);
    const [canSend, setCanSend] = useState(true);
    const [timeoutRemaining, setTimeoutRemaining] = useState(0);

    // Função para calcular o tempo restante baseado no timestamp salvo
    const calculateRemainingTime = (lastSentTime) => {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - lastSentTime) / 1000);
        const remainingTime = 60 - elapsedTime; // 60 segundos de espera
        return remainingTime > 0 ? remainingTime : 0;
    };

    useEffect(() => {
        // Checar se existe um timestamp salvo no localStorage
        const lastSentTime = localStorage.getItem("lastSentTime");
        if (lastSentTime) {
            const remainingTime = calculateRemainingTime(parseInt(lastSentTime));
            if (remainingTime > 0) {
                setCanSend(false);
                setTimeoutRemaining(remainingTime);
                // Inicia a contagem regressiva
                const countdown = setInterval(() => {
                    setTimeoutRemaining((prev) => {
                        if (prev === 1) {
                            clearInterval(countdown);
                            setCanSend(true);
                            return 0;
                        }
                        return prev - 1;
                    });
                }, 1000);
            }
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (loading || !canSend) return;

        if (!nome.trim() || !email.trim() || !mensagem.trim()) {
            toast('Preencha todos os campos para enviar sua mensagem!', {
                icon: '⚠️',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            });
            return;
        }

        try {
            setLoading(true);
            await sendContactMail(nome, email, mensagem);

            setNome('');
            setEmail('');
            setMensagem('');

            toast("Mensagem enviada com sucesso!", {
                icon: '📬',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            });

            setCanSend(false);
            const currentTime = Date.now();
            localStorage.setItem("lastSentTime", currentTime); // Salva o timestamp no localStorage
            setTimeoutRemaining(60); // Define o tempo de espera de 60 segundos

            const countdown = setInterval(() => {
                setTimeoutRemaining((prev) => {
                    if (prev === 1) {
                        clearInterval(countdown);
                        setCanSend(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

        } catch (err) {
            console.log(err);
            toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
                icon: '⚠️',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>João Araujo | Contato</title>
                <meta name="descrição" content="Formulario de Contato" />
                <title>João Araujo | Contato</title>
                <meta name="descrição" content="Contato" />
                <meta name="description" content="Contato" />
                <meta property="og:title" content="João Araujo | Contato" />
                <meta
                    property="og:description"
                    content="Pagina de Contato"
                />
                <meta
                    property="og:image"
                    content="https://www.jvaraujo.com.br/pagina_contato.png"
                />
            </Head>
            <TransitionEffect />
            <Layout className="pt-16 sm:p-8">
                <AnimatedText text="Entre em Contato!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-5xl xs:!text-4xl !text-6xl" />
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex justify-between gap-2">
                        <input type="text" placeholder="Nome" className="w-full h-10 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out transform " value={nome} onChange={(e) => setNome(e.target.value)} />
                        <input type="email" placeholder="Email" className="w-full h-10 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out transform " value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <textarea value={mensagem} placeholder="Mensagem" className="w-full h-32 p-4 rounded-md resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out transform hover:scale-102" onChange={(e) => setMensagem(e.target.value)} />
                    <button type="submit" disabled={loading || !canSend} className="flex justify-center align-middle w-1/4  bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform ">
                        {loading ? < Pinwheel color="white" size={30} /> : canSend ? "Enviar" : `Aguarde ${timeoutRemaining}s`}
                    </button>
                </form>
            </Layout>
        </>
    );
}