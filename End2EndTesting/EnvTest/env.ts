require('dotenv').config();
export default class ENV
{
    public static URL=process.env["URL"] as string;
    public static URL_1=process.env["URL_1"] as string;
    public static USER_NAME=process.env["USER_NAME"] as string;
    public static PASSWORD=process.env["PASSWORD"] as string;
    public static STATUS1=process.env["STATUS1"] as string;
    public static STATUS2=process.env["STATUS2"] as string;
    public static STATUS3=process.env["STATUS3"] as string;
}