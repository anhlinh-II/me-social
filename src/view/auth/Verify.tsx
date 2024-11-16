import React, { useState } from "react";
import { Button, Form, Input, Typography, message } from "antd";
import verify from '../../assets/verify-otp.png';
import { callVerifyOtp } from "../../services/AuthService";
import { useParams } from "react-router-dom";

const { Title, Text } = Typography;

const VerifyOtp: React.FC = () => {
     const email = useParams().email as string;
     const [otp, setOtp] = useState<string[]>(Array(6).fill("")); // Array to hold six digits
     const [isResending, setIsResending] = useState<boolean>(false);
     const [loading, setLoading] = useState<boolean>(false);

     const handleChange = (value: string, index: number) => {
          const updatedOtp = [...otp];

          if (value) {
               // Add the value to the current index and move to the next field
               updatedOtp[index] = value;
               setOtp(updatedOtp);

               if (index < 5) {
                    const nextInput = document.getElementById(`otp-input-${index + 1}`);
                    nextInput?.focus();
               }
          }
     };

     const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
          const updatedOtp = [...otp];

          if (event.key === "Backspace") {
               // Clear the current field value
               updatedOtp[index] = "";
               setOtp(updatedOtp);

               if (index > 0) {
                    // Move focus to the previous field
                    const prevInput = document.getElementById(`otp-input-${index - 1}`);
                    prevInput?.focus();
               }
          }
     };

     const handleVerify = async () => {
          setLoading(true);
          try {
               const otpCode = otp.join(""); // Combine all digits into a single string
               const response = await callVerifyOtp(email, otpCode)
               if (response && response.data && response.data.code === 1000) {
                    message.success(response.data.message || "OTP verified successfully!");
               }
               if (response && response.data && response.data.code !== 1000) {
                    message.error(response.data.message || "Verify failed")
               }

          } catch (error: any) {
               message.error(error.response?.data?.message || "Failed to verify OTP.");
          } finally {
               setLoading(false);
          }
     };

     const handleResend = async () => {
          setIsResending(true);
          // try {
          //      await axios.post("/api/auth/resend-otp", { email });
          //      message.success("OTP resent successfully!");
          // } catch (error: any) {
          //      message.error(error.response?.data?.message || "Failed to resend OTP.");
          // } finally {
          //      setIsResending(false);
          // }
     };

     return (
          <div className="flex justify-center items-center h-screen bg-gray-200/50">
               <div className="max-w-[1200px] flex items-center h-[80%] rounded-lg shadow-md">
                    <img src={verify} alt="verify otp image" className="h-full w-3/5 object-cover rounded-l-lg" />
                    <div className="w-2/5 h-full flex items-center bg-white p-6 rounded-r-lg">
                         <div>
                              <Title level={4} className="text-center mb-2">
                                   OTP Verification
                              </Title>
                              <Text type="secondary" className="block text-center mb-4">
                                   Enter OTP code sent to <span className="font-semibold">{email?.replace(/(.{2}).*@/, "$1****@")}</span>
                              </Text>
                              <div className="flex justify-center gap-2 mb-4">
                                   {otp.map((digit, index) => (
                                        <Input
                                             key={index}
                                             id={`otp-input-${index}`}
                                             maxLength={1}
                                             value={digit}
                                             onChange={(e) => handleChange(e.target.value, index)}
                                             onKeyDown={(e) => handleKeyDown(e, index)}
                                             className="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:border-sky-600 focus:outline-none"
                                        />
                                   ))}
                              </div>


                              <Button
                                   type="primary"
                                   block
                                   onClick={handleVerify}
                                   loading={loading}
                                   disabled={otp.some((digit) => !digit)} // Disable if any input is empty
                              >
                                   Verify OTP
                              </Button>
                              <div className="text-center mt-4">
                                   <Text>Didn't receive the OTP?</Text>
                                   <Button
                                        type="link"
                                        onClick={handleResend}
                                        loading={isResending}
                                        className="p-0 ml-1"
                                   >
                                        Resend OTP
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default VerifyOtp;
