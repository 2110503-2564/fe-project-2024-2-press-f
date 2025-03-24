import getCompany from "@/libs/getCompany"
import Image from "next/image"

export default async function CompanyDetailPage({ params }: { params: { cid: string } }) {
    const companyDetail = await getCompany(params.cid);

    return (
        <main className="p-10 bg-gray-100 min-h-screen">
            {/* ชื่อบริษัท */}
            <div className="text-4xl font-bold text-center text-gray-900 my-8">
                {companyDetail.data.name}
            </div>

            {/* Card Container */}
            <div className="flex justify-center">
                <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-7xl flex flex-col md:flex-row items-center gap-6 relative">
                    {/* Company Image */}
                    <div className="w-full md:w-1/3">
                        <Image
                            src={companyDetail.data.picture}
                            alt="Company Image"
                            width={500}
                            height={500}
                            className="rounded-lg w-full object-cover"
                            priority
                        />
                    </div>

                    {/* Company Details */}
                    <div className="text-lg text-gray-700 w-full md:w-2/3 space-y-4">
                        <div>
                            <span className="font-semibold text-gray-900">Name:</span> {companyDetail.data.name}
                        </div>
                        <div>
                            <span className="font-semibold text-gray-900">Address:</span> {companyDetail.data.address}, {companyDetail.data.province}, {companyDetail.data.postalcode}
                        </div>
                        <div>
                            <span className="font-semibold text-gray-900">Website:</span>{" "}
                            <a href={companyDetail.data.website} className="text-blue-600 hover:underline">
                                {companyDetail.data.website}
                            </a>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-900">Description:</span> {companyDetail.data.description}
                        </div>
                        <div>
                            <span className="font-semibold text-gray-900">Tel:</span> {companyDetail.data.tel}
                        </div>
                    </div>

                    {/* ปุ่มขวาล่าง */}
                    <button className="absolute bottom-4 right-4 bg-purple-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-purple-500 border border-purple-500 transition">
                    Booking
                    </button>
                </div>
            </div>
        </main>
    );
}
