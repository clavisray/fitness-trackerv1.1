import { createContext, useEffect, useState, type ReactNode, } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";

type AuthContextValue = {
    user: User | null;
    session: Session | null;
    loading: boolean;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
    undefined
);

type AuthProviderProps = {
    children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkSession() {
            const { data } = await supabase.auth.getSession();

            setSession(data.session);
            setUser(data.session?.user ?? null);
            setLoading(false);
        }

        checkSession();

        const { data: authListener } =
            supabase.auth.onAuthStateChange((_event, newSession) => {
                setSession(newSession);
                setUser(newSession?.user ?? null);
                setLoading(false);
            });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    async function logout() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.log(error.message);
        }
    }

    return (
        <AuthContext.Provider value={{ user, session, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;