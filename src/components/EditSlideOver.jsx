import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function EditSlideOver({person, onClose, onSubmit}) {
    const [open, setOpen] = useState(true)

    const [name, setName] = useState(person.customer_name);
    const [email, setEmail] = useState(person.customer_email);
    const [product, setProduct] = useState(person.product);
    const [quantity, setQuantity] = useState(person.quantity);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                        <div className="h-0 flex-1 overflow-y-auto">
                                            <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <Dialog.Title className="text-base font-semibold leading-6 text-white">
                                                        Edit Order
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                            onClick={onClose}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between">
                                                <div className="divide-y divide-gray-200 px-4 sm:px-6">
                                                    <div className="space-y-6 pb-5 pt-6">
                                                        <div>
                                                            <label
                                                                htmlFor="person-name"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Name
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="person-name"
                                                                    id="person-name"
                                                                    value={name}
                                                                    required={true}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                htmlFor="person-email"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Email
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="email"
                                                                    name="person-email"
                                                                    id="person-email"
                                                                    required={true}
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                htmlFor="product"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Product
                                                            </label>
                                                            <div className="mt-2">
                                                                <select
                                                                    id="location"
                                                                    name="location"
                                                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    value={product}
                                                                    onChange={(e) => setProduct(e.target.value)}
                                                                >
                                                                    <option>Product 1</option>
                                                                    <option>Product 2</option>
                                                                    <option>Product 3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                htmlFor="quantity"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Quantity
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="number"
                                                                    name="quantity"
                                                                    required={true}
                                                                    id="quantity"
                                                                    value={quantity}
                                                                    onChange={(e) => setQuantity(e.target.value)}
                                                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                            <button
                                                type="button"
                                                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                onClick={onClose}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                onClick={() => {
                                                    // Email validation
                                                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                                    if (!emailRegex.test(email)) {
                                                        console.log("invalid email")
                                                        return;
                                                    }

                                                    // Quantity validation
                                                    if (quantity <= 0) {
                                                        console.log("invalid quantity")
                                                        return;
                                                    }

                                                    // Product validation
                                                    const validProducts = ['Product 1', 'Product 2', 'Product 3'];
                                                    if (!validProducts.includes(product)) {
                                                        console.log("product not available")
                                                        return;
                                                    }

                                                    onSubmit({ id: person.id, customer_name: name, customer_email: email, product, quantity });
                                                    onClose();
                                                }}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}