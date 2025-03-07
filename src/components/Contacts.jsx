export default function Contacts() {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Связаться с Нами</h2>
            <p className="text-gray-600 mb-6">
              У вас есть вопросы или нужна помощь с выбором? Мы всегда на связи!
            </p>
            <h3 className="text-xl font-semibold">Наша Почта</h3>
            <p className="text-gray-500 mb-4">Test.Email@gmail.com</p>
            <h3 className="text-xl font-semibold">Наш Номер Тел.</h3>
            <p className="text-gray-500 mb-4">+123 123 123 123</p>
            <h3 className="text-xl font-semibold">Соц. Сети</h3>
            <ul className="text-blue-500 space-y-2">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
          <div className="self-start">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Имя</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-100" />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded bg-gray-100" />
              </div>
              <div>
                <label className="block text-gray-700">Номер Телефона</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-100" placeholder="+123 123 123 123" />
              </div>
              <div>
                <label className="block text-gray-700">Сообщение</label>
                <textarea className="w-full p-2 border border-gray-300 rounded bg-gray-100 h-32"></textarea>
              </div>
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  