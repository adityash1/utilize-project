import {useEffect, useState} from 'react';
import EditSlideOver from "./EditSlideOver.jsx";
import peopleData from '../../DummyData.json';

const ITEMS_PER_PAGE = 15;

function Lists() {
    const [people, setPeople] = useState(() => {
        const storedPeople = localStorage.getItem('people');
        return storedPeople ? JSON.parse(storedPeople) : peopleData;
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

    const totalPages = Math.ceil(people.length / ITEMS_PER_PAGE);

    useEffect(() => {
        localStorage.setItem('people', JSON.stringify(people));
    }, [people]);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleEditClick = (person) => {
        setSelectedPerson(person);
        setIsSlideOverOpen(true);
    };

    const handleDeleteClick = (personToDelete) => {
        setPeople((prevPeople) => prevPeople.filter((person) => person.id !== personToDelete.id));
    };

    const handleEditPerson = (personToEdit) => {
        setPeople((prevPeople) => {
            const updatedPeople = prevPeople.map((person) => {
                if (person.id === personToEdit.id) {
                    return personToEdit;
                }
                return person;
            });
            return updatedPeople;
        });
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const selectedPeople = people.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Email
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Product
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Quantity
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {selectedPeople.map((person) => (
                                <tr key={person.customer_email}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        {person.customer_name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.customer_email}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.product}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.quantity}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                        <button onClick={() => handleEditClick(person)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                        <button onClick={() => handleDeleteClick(person)} className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                            {isSlideOverOpen && <EditSlideOver person={selectedPerson} onClose={() => setIsSlideOverOpen(false)} onSubmit={handleEditPerson}/>}
                        </table>
                        <nav
                            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                            aria-label="Pagination"
                        >
                            <div className="hidden sm:block">
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{startIndex + ITEMS_PER_PAGE}</span> of{' '}
                                    <span className="font-medium">{people.length}</span> results
                                </p>
                            </div>
                            <div className="flex flex-1 justify-between sm:justify-end">
                                <button onClick={handlePrevious} className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
                                    Previous
                                </button>
                                <button onClick={handleNext} className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 ml-3">
                                    Next
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lists;