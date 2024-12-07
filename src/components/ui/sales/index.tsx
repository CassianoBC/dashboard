import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";



export default function Sales() {
    return (
        <div  className="flex-1">
            <Card className="h-full">
            <CardHeader>
                    <div className="flex items-center justify-center">
                        <CardTitle className="text-lg sm:text-xl text-gray-600">
                            Últimos clientes
                        </CardTitle>
                        <CircleDollarSign className="ml-auto w-4 h-4" />
                    </div>
                    <CardDescription>
                    Novos clientes nas últimas 24horas
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <article className="flex items-center gap-2 border-b py-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://github.com/cassianobc.png" />
                            <AvatarFallback>CB</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
                            <span className="text-[12px] sm:text-sm">Teste@teste.com</span>
                        </div>
                    </article>
                    <article className="flex items-center gap-2 border-b py-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://github.com/cassianobc.png" />
                            <AvatarFallback>CB</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
                            <span className="text-[12px] sm:text-sm">Teste@teste.com</span>
                        </div>
                    </article>
                    <article className="flex items-center gap-2 border-b py-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://github.com/cassianobc.png" />
                            <AvatarFallback>CB</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base font-semibold">Sujeito Programador</p>
                            <span className="text-[12px] sm:text-sm">Teste@teste.com</span>
                        </div>
                    </article>
                </CardContent>
                
            </Card>
        </div>
    )
}
