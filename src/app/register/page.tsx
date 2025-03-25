'use client'
import { AppDispatch } from "@/redux/store";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";
import userRegister from "@/libs/userRegister";
import { useRouter } from "next/navigation";

export default function Booking() {

    const [nameLastname, setNameLastname] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    const handleRegister = async (e:React.MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
            if (!window.confirm("Are you sure your information correct?")) {
                return
            }
            try {
                if (nameLastname && contactNumber && email && password) {
                    const Data: Record<string,string> = {
                        name: nameLastname,
                        tel: contactNumber,
                        email: email,
                        password: password,
                    }
                    await userRegister(Data)
                    alert("Register successfully!")
                    router.refresh()
                }
            } catch (error) {
                console.log(error)
            } finally {
                router.push('/api/auth/signin?callbackUrl=/')
                router.refresh()
            }
        }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
                <div className="fixed top-40 bg-registermenu rounded-md transition space-y-4 w-[25%]">
                    <div className="flex flex-col p-5 space-y-4">
                        <TextField variant="outlined" name="Name" label="Name"
                            className="my-2" required
                            InputLabelProps={{ className: "text-gray" }}
                            InputProps={{ className: "text-white" }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "gray",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "gray",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "white",
                                    }
                                },
                                input: { 
                                    color: "white"
                                }, 
                                "& .MuiInputLabel-root": {
                                    color: "gray",
                                },
                                "& .Mui-focused .MuiInputLabel-root": {
                                    color: "gray"
                                },
                            }}
                            value={nameLastname} onChange={(event) => setNameLastname(event.target.value)}
                        />
                        <TextField variant="outlined" name="Tel" label="Tel"
                            className="my-2" required
                            InputLabelProps={{ className: "text-gray" }}
                            InputProps={{ className: "text-white" }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "gray",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "gray",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "white",
                                    }
                                },
                                input: { 
                                    color: "white"
                                }, 
                                "& .MuiInputLabel-root": {
                                    color: "gray",
                                },
                                "& .Mui-focused .MuiInputLabel-root": {
                                    color: "gray"
                                },
                            }}
                            value={contactNumber} onChange={(event) => setContactNumber(event.target.value)}
                        />
                        <TextField variant="outlined" name="Email" label="Email"
                            className="my-2" required
                            InputLabelProps={{ className: "text-gray" }}
                            InputProps={{ className: "text-white" }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "gray",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "gray",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "white",
                                    }
                                },
                                input: { 
                                    color: "white"
                                }, 
                                "& .MuiInputLabel-root": {
                                    color: "gray",
                                },
                                "& .Mui-focused .MuiInputLabel-root": {
                                    color: "gray"
                                },
                            }}
                            value={email} onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField variant="outlined" name="Password" label="Password"
                            className="my-2" type="password" required
                            InputLabelProps={{ className: "text-gray" }}
                            InputProps={{ className: "text-white" }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "gray",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "gray",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "white",
                                    }
                                },
                                input: { 
                                    color: "white"
                                }, 
                                "& .MuiInputLabel-root": {
                                    color: "gray",
                                },
                                "& .Mui-focused .MuiInputLabel-root": {
                                    color: "gray"
                                },
                            }}
                            value={password} onChange={(event) => setPassword(event.target.value)}
                        />
                        <button
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg my-2"
                            onClick={handleRegister}
                            disabled={isLoading}
                        >
                            {isLoading ? "Register..." : "Register"}
                        </button>
                    </div>
                </div>
        </main>
    )
}