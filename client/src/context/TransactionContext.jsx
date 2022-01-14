import React, { useEffect, useState } from 'react';
import {ethers}  from "ethers";

import { contractABI, contractAddress } from '../utils/constants';


export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signar = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI,signar);


    console.log({
        provider,
        signar,
        transactionContract
    })
}

export const TransactionProvider = ({children}) =>{

    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async () =>{

        if(!ethereum) return alert("Please install Metamask");

        const accounts = await ethereum.request({method: "eth_accounts"});

        console.log(accounts);
    }

    const connectWallet= async()=>{
        try{
            if(!ethereum) return alert("Please install Metamask");

            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            setCurrentAccount(accounts[0]);
            console.log(accounts);
        }
        catch(error){
            console.log(error);

            throw new Error("No ethereum object...");
        }
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
    }, [])

    return(
        <TransactionContext.Provider value={{connectWallet} }>
            {children}
        </TransactionContext.Provider>
    )
}
