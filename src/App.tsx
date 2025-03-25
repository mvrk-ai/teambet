import React from 'react';
import { Calendar, CheckSquare, Info, Users, ChevronDown, MapPin, Clock, AlertTriangle, UserCircle2, Heart, Anchor, Users2, Plane, Building, Mail, Phone, Hotel, Cloud } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SectionHeading } from './components/SectionHeading';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { cn } from './utils';
import WeatherUpdate from './components/WeatherUpdate';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://theflagship.asia/uploader/uploads/img-2621-2.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">TU LAN RACE 2025</h1>
            <h2 className="text-3xl mb-8">2025 Team BÉT - Tu Lan Race 2025</h2>
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Container className="py-16 space-y-24">
        {/* Weather Update */}
        <section id="weather">
          <SectionHeading
            icon={Cloud}
            title="Dự Báo Thời Tiết"
            description="Cập nhật thời tiết cho các ngày đua"
            iconClassName="text-blue-600"
          />
          
          <Card className="p-6">
            <WeatherUpdate />
          </Card>
        </section>

        {/* Members Section */}
        <section id="members">
          <SectionHeading
            icon={Users}
            title="Thành Viên"
            description="Team Bét, quyết tâm không DNF"
            iconClassName="text-indigo-600"
          />

          <div className="space-y-12">
            {/* Core Members */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <UserCircle2 className="w-6 h-6 text-indigo-600" />
                <span>Thành Viên Chính (10)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Bình Bão",
                    role: "Kết nối Oxalis",
                    image: "https://theflagship.asia/uploader/uploads/binhbao.png"
                  },
                  {
                    name: "Tân Tân",
                    role: "Sweeper",
                    image: "https://theflagship.asia/uploader/uploads/tantan.png"
                  },
                  {
                    name: "Hiền Hiền",
                    role: "Thủ quỹ",
                    image: "https://theflagship.asia/uploader/uploads/hienhien2.png"
                  },
                  {
                    name: "DuyK",
                    role: "Hô nhịp - Kéo thuyền",
                    image: "https://theflagship.asia/uploader/uploads/duyk.png"
                  },
                  {
                    name: "Pao",
                    role: "Vượt qua bản thân",
                    image: "https://theflagship.asia/uploader/uploads/pao.png"
                  },
                  {
                    name: "Nhộng",
                    role: "Hô nhịp - Vượt qua Pao",
                    image: "https://theflagship.asia/uploader/uploads/nhong.png"
                  },
                  {
                    name: "CocoAna",
                    role: "Sơ cứu & Y tế",
                    image: "https://theflagship.asia/uploader/uploads/cocoana.png"
                  },
                  {
                    name: "Qoàng Qoàng",
                    role: "Kéo thuyền",
                    image: "https://theflagship.asia/uploader/uploads/qoangqoang.png"
                  },
                  {
                    name: "Spy",
                    role: "Thợ đụng - đẩy thuyền - Lái phụ",
                    image: "https://theflagship.asia/uploader/uploads/spy.png"
                  },
                  {
                    name: "Vân Anh",
                    role: "Hoà nhập - Phó thợ đụng",
                    image: "https://theflagship.asia/uploader/uploads/vananh.png"
                  }
                ].map((member, index) => (
                  <Card key={index} className="flex items-center p-4 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center w-full h-full">
                          <UserCircle2 className="w-8 h-8 text-indigo-400" />
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-indigo-600 text-sm">{member.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Buddy System */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users2 className="w-6 h-6 text-emerald-600" />
                <span>Hệ Thống Buddy</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  ["Bình Bão", "Pao"],
                  ["Tân Tân", "Hiền Hiền"],
                  ["DuyK", "Nhộng"],
                  ["Qoàng Qoàng", "CocoAna"],
                  ["Spy", "Vân Anh"]
                ].map((pair, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">{pair[0]}</span>
                      </div>
                      <div className="text-emerald-600">⟷</div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{pair[1]}</span>
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Boat Team */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Anchor className="w-6 h-6 text-blue-600" />
                <span>Đội Hình Chèo Thuyền</span>
              </h3>
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-800 font-semibold border-b border-blue-100 pb-2">
                      <Anchor className="w-5 h-5" />
                      <span>Vị Trí Đặc Biệt</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span>Mũi thuyền/Hoa Tiêu</span>
                        <span className="font-semibold">Bình Bão</span>
                      </li>
                      <li className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <span>Đuôi Thuyền/Lái</span>
                        <span className="font-semibold">Tân Tân</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-800 font-semibold border-b border-blue-100 pb-2">
                      <Users className="w-5 h-5" />
                      <span>Các Cặp Chèo</span>
                    </div>
                    <ul className="space-y-3">
                      {[
                        ["DuyK", "Quàng"],
                        ["Hiền Hiền", "Nhộng"],
                        ["Pao", "Vân Anh"],
                        ["Spy", "CocoAna"]
                      ].map((pair, index) => (
                        <li key={index} className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                          <span>{pair[0]}</span>
                          <span className="text-blue-600">⟷</span>
                          <span>{pair[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Race Briefing */}
        <section id="briefing">
          <SectionHeading
            icon={Calendar}
            title="Thông Tin Cuộc Đua"
            description="Hành trình chinh phục Tú Làn trong 3 ngày với những thử thách đặc biệt"
            iconClassName="text-blue-600"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <Card>
              <Card.Header className="bg-blue-50">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-800">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Ngày 1 (27/3/2025): Tập kết
                </h3>
              </Card.Header>
              <Card.Body className="space-y-6">
                <div className="prose prose-blue">
                  <p className="text-gray-700 leading-relaxed">
                    Yêu cầu tất cả các đội có mặt tại Điểm tập kết (Bến xe buýt Phong Nha) trước 13:00 ngày 27/03/2025 để điểm danh. Sẽ không có bất kỳ nhiệm vụ nào trong ngày đầu tiên này, các đội chơi khi đặt chân đến đây sẽ có cơ hội tận hưởng không khí mát mẻ, trải nghiệm sự yên bình của chốn làng quê, trước khi điểm danh & lên xe di chuyển lên Tân Hóa.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Tại Tân Hóa, các đội sẽ tham gia buổi họp hướng dẫn về an toàn trước cuộc đua, sau đó sẽ trở về nhà người dân địa phương dùng bữa tối và nghỉ ngơi.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-800 border-b border-blue-100 pb-2">Oxalis sẽ cung cấp</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Phương tiện di chuyển: Xe đi từ Phong Nha đến Tân Hóa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Các thông tin cần thiết liên quan đến phương tiện di chuyển</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Bữa tối tại nhà người dân địa phương</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Thiết bị cắm trại tại nhà người dân địa phương: khu cắm trại, lều, đèn trại, túi ngủ, 1 bộ khóa lều đựng đồ (Mỗi đội sẽ được cấp 5 lều bao gồm 3 lều ba và 2 lều đơn trong đó có 1 lều đơn đựng hành lý)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Tài liệu và các thông tin cần thiết liên quan đến chương trình để đảm bảo tất cả các thành viên tham gia hiểu rõ về nội quy, quy định, luật chơi trong quá trình tham gia</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-800 border-b border-blue-100 pb-2">Các đội chơi cần chuẩn bị</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Tự túc phương tiện di chuyển đến Điểm tập kết tại Phong Nha</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Chuẩn bị đầy đủ tư trang cá nhân cần thiết cho cuộc đua trước khi xuất phát đến Điểm tập kết tại Phong Nha</span>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>

            {/* Day 2 */}
            <Card>
              <Card.Header className="bg-green-50">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-green-800">
                  <Clock className="w-5 h-5 text-green-600" />
                  Ngày 2 (28/3/2025): Hành trình Rào Nan
                </h3>
              </Card.Header>
              <Card.Body className="space-y-6">
                <div className="prose prose-green">
                  <p className="text-gray-700 leading-relaxed">
                    Trong ngày thứ 2 sau khi ăn sáng, tất cả người chơi sẽ di chuyển đến Điểm xuất phát - Văn phòng Oxalis Tân Hóa. Các đội chơi được yêu cầu tham gia trò chơi tập thể, giải mật thư trước khi đua về điểm xuất phát đua thuyền. Tại đây, mỗi đội sẽ được phát 1 chiếc thuyền nhôm bắt đầu đua từ Hang Chuột về đến đích là cửa Hang Rùa.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Đây sẽ là một thử thách khá khó với tổng độ dài quãng đường đua lên đến hơn 8km chèo ngược dòng, các đội chơi sẽ cần phải khiêng thuyền qua một vài đoạn ghềnh, thác nhỏ để tránh làm hỏng thuyền.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ở vòng này, tinh thần đồng đội là yếu tố quyết định tất cả. Sau cuộc đua thuyền, các đội được yêu cầu di chuyển 900m qua hang Rùa rồi chạy khoảng 7km về lại điểm kết thúc ngày đua thứ nhất tại Điểm đích trước 17 giờ cùng ngày.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-800 border-b border-green-100 pb-2">Lịch trình chi tiết</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-green-700 whitespace-nowrap">06:00</span>
                      <span>Ăn sáng tại nhà dân địa phương</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-green-700 whitespace-nowrap">07:00</span>
                      <span>Các đội tập trung trước văn phòng Oxalis Tân Hóa & nhận đồ ăn trưa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-green-700 whitespace-nowrap">08:00</span>
                      <span>BTC phổ biến luật chơi và các quy định trong vòng Hành trình Rào Nan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-green-700 whitespace-nowrap">09:45</span>
                      <span>Các đội chơi tham gia giải mật thư, xuất phát đua từ văn phòng Oxalis Tân Hóa ra đến cửa hang Chuột nhận thuyền, đích đến là Hang Rùa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-green-700 whitespace-nowrap">17:00</span>
                      <span>Tất cả các đội phải có mặt tại điểm đích. Tập trung tại văn phòng Oxalis Tân Hóa tổng kết đua Ngày 1</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-green-700 whitespace-nowrap">18:00</span>
                      <span>Các đội ăn tối tại nhà dân địa phương, tìm hiểu văn hóa người Nguồn</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-800 border-b border-green-100 pb-2">Trang thiết bị được cung cấp</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Thuyền nhôm (10 mái chèo, 2 gáo tát nước)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Áo phao cho tất cả người chơi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Hộp khô chống nước</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Mũ bảo hộ, đèn thám hiểm</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Túi sơ cấp cứu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Túi khô bảo quản đồ ăn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Tủ khóa an toàn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Nhân viên cứu hộ</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Day 3 */}
            <div className="md:col-span-2">
              <Card>
                <Card.Header className="bg-purple-50">
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-purple-800">
                    <Clock className="w-5 h-5 text-purple-600" />
                    Ngày 3 (29/3/2025): Chinh phục Tú Làn
                  </h3>
                </Card.Header>
                <Card.Body className="space-y-6">
                  <div className="prose prose-purple max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      Độ dài quãng đường của thử thách ngày hôm nay sẽ dài hơn, khó khăn hơn và mạo hiểm hơn rất nhiều so với ngày hôm trước. Trong suốt chặng đường, người tham gia sẽ được chiêm ngưỡng và trải nghiệm vẻ đẹp mê hồn khó diễn tả của rừng núi và hang động. Điều đó sẽ giúp xua tan nỗi sợ hãi và khó khăn để vượt qua các thử thách của vòng CHINH PHỤC TÚ LÀN.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-purple-800 border-b border-purple-100 pb-2">Lịch trình chi tiết</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-purple-700 whitespace-nowrap">06:30</span>
                          <span>Ăn sáng tại khu cắm trại</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-purple-700 whitespace-nowrap">07:30</span>
                          <span>BTC phổ biến luật chơi và quy định</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-purple-700 whitespace-nowrap">08:00</span>
                          <span>Xuất phát: chạy bộ, chui hang, leo núi, bơi qua hang nước (19km tổng cộng)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-purple-700 whitespace-nowrap">17:00</span>
                          <span>Tất cả các đội phải có mặt tại điểm đích</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-purple-700 whitespace-nowrap">18:30</span>
                          <span>Tiệc Gala tổng kết & trao giải</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-purple-800 border-b border-purple-100 pb-2">Trang thiết bị được cung cấp</h4>
                      <div className="grid gap-4">
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>Bữa sáng từ đầu bếp địa phương</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>Cơm trưa đóng gói (cơm nắm, muối mè, thịt kho)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>Máy bộ đàm khẩn cấp</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>Thiết bị thám hiểm hang động</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>Đèn pin</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>Đèn pin</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>Tiệc Gala dinner với DJ và âm nhạc</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 mt-4">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Thông tin chặng đua</h4>
                    <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>300m bơi hang nước</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>8km đường bằng</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>11km rừng, núi</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>3 dốc (độ cao TB 250m)</span>
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Agenda */}
        <section id="agenda">
          <SectionHeading
            icon={Users}
            title="Lịch Trình Team"
            iconClassName="text-green-600"
          />
          
          <Card className="p-6 space-y-8">
            {/* Day by day schedule */}
            {[
              {
                date: "26/3/2025",
                icon: <Plane className="w-5 h-5 text-blue-600" />,
                title: "Ngày Di Chuyển",
                events: [
                  { time: "05:00", text: "Tập kết sân bay TSN" },
                  { time: "08:35", text: "Đáp Quảng Bình" },
                  { time: "10:30", text: "Tour Hang Tối - Jungle Boss" },
                  { time: "12:30", text: "Ăn Trưa Nhà hàng Dark Cave" },
                  { time: "16:00", text: "Kết thúc tour Hang Tối, di chuyển về Tân Hoá - xe Oxalis" },
                  { time: "18:30", text: "Ăn tối & nghỉ ngơi" }
                ]
              },
              {
                date: "27/3/2025",
                icon: <MapPin className="w-5 h-5 text-green-600" />,
                title: "Ngày Tập Kết",
                events: [
                  { time: "08:00", text: "Ăn sáng, dạo quanh Phong Nha" },
                  { time: "11:30", text: "Ăn Trưa & check-out" },
                  { time: "13:00", text: "Tập trung Điểm Tập Kết (Bến xe bus Phong Nha)" },
                  { time: "16:00", text: "Briefing Tân Hoá" },
                  { time: "17:30", text: "Check-in Camp" },
                  { time: "18:30", text: "Dinner & Nghỉ ngơi" }
                ]
              },
              {
                date: "28/3/2025",
                icon: <Anchor className="w-5 h-5 text-indigo-600" />,
                title: "Ngày Đua 1: Hành trình Rào Nan",
                events: [
                  { time: "06:00", text: "Ăn sáng tại nhà dân địa phương" },
                  { time: "07:00", text: "Các đội tập trung trước văn phòng Oxalis Tân Hóa & nhận đồ ăn trưa" },
                  { time: "08:00", text: "BTC phổ biến luật chơi và các quy định trong vòng Hành trình Rào Nan" },
                  { time: "09:45", text: "Các đội chơi tham gia giải mật thư, xuất phát" },
                  { time: "17:00", text: "Cutoff Time" },
                  { time: "18:00", text: "Các đội ăn tối tại nhà dân địa phương" }
                ]
              },
              {
                date: "29/3/2025",
                icon: <Users className="w-5 h-5 text-purple-600" />,
                title: "Ngày Đua 2: Chinh Phục Tú Làn",
                events: [
                  { time: "06:30", text: "Ăn sáng tại khu cắm trại, văn phòng Oxalis Tân Hóa" },
                  { time: "07:30", text: "BTC phổ biến luật chơi và các quy định trong vòng Chinh Phục Tú Làn" },
                  { time: "08:00", text: "Xuất phát chạy bộ, chui hang, leo núi, bơi qua hang nước" },
                  { time: "17:00", text: "Tất cả các đội phải có mặt tại văn phòng Oxalis ở Tân Hóa" },
                  { time: "18:30", text: "Tiệc Gala tổng kết & trao giải" }
                ]
              },
              {
                date: "30/3/2025",
                icon: <Plane className="w-5 h-5 text-red-600" />,
                title: "Ngày Trở Về",
                events: [
                  { time: "06:30", text: "Dậy ăn sáng & dọn dẹp hành lý" },
                  { time: "08:30", text: "Tập trung tại ngã 3 'Làng Du lịch tốt nhất thế giới'" },
                  { time: "10:30", text: "Check-out & di chuyển về Đồng Hới (xe Oxalis)" },
                  { time: "12:00", text: "Ăn Trưa Phong Nha (Nhà hàng Hải sản) - Dạo phố" },
                  { time: "17:00", text: "Di chuyển ra sân bay" },
                  { time: "19:00", text: "Chuyến bay về TSN" }
                ]
              }
            ].map((day, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                  {day.icon}
                  <h3 className="text-xl font-semibold">{day.date}: {day.title}</h3>
                </div>
                <div className="grid gap-3">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-start gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <span className="font-semibold text-gray-700 whitespace-nowrap">{event.time}</span>
                      <span className="text-gray-600">{event.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </section>

        {/* Preparation Checklist */}
        <section id="checklist">
          <SectionHeading
            icon={CheckSquare}
            title="Danh Sách Chuẩn Bị"
            iconClassName="text-purple-600"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* TEAM Section */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">TEAM</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">Đồ Đạc:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Dây dù bản lớn kéo thuyền: 20m
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Dry Bag x 3
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">RACE PLAN:</h4>
                  <ol className="space-y-3 pl-4 list-decimal">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">1. Ngày đầu (chèo) chúng ta sẽ mặc áo team BÉT (Oxalis cung cấp) dài tay. Vì toàn bộ sông sẽ dưới nắng nên cần cẩn thận.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">2. Đồ ăn ngày đầu Oxalis cung cấp lấy vừa đủ, để lại đồ không cần thiết. Chủ động 2 người 1 phần là được. Bỏ vào Dry-Bag của team.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">3. Lúc chèo chúng ta đi giày sandal, bỏ giày trail vào dry-bag của Oxalis (lớn hơn). Khi chuyển chèo qua chạy, chúng ta đổi giày</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">4. Ngày 2 chúng ta mặc áo tay ngắn team BÉT, đeo sleevers, để có thể thoải mái khi vô vào khu vực bóng râm</span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">CHIA LỀU</h4>
                  <div className="mb-2 text-gray-700">
                    Số lượng: 1 lều đơn có khoá để đồ, 1 lều đơn, 1 lều đôi (cổ động viên) & 3 lều 3
                  </div>
                  <div className="space-y-4">
                    <ul className="space-y-1 pl-4">
                      <li>Lều Đơn: Spy-Vân Anh</li>
                      <li>Lều Đôi: Qoàng - Phương</li>
                      <li>Lều 3-1: a Bình Bão - a DuyK</li>
                      <li>Lều 3-2: Nhộng - Pao - CocoAna</li>
                      <li>Lều 3-3: Tân Tân - Hiền Hiền</li>
                    </ul>
                  </div>
                </div>

                {/* HÀNH LÝ Section */}
                <h4 className="font-semibold mb-2 text-purple-500">HÀNH LÝ</h4>
                <div className="text-gray-700">
                  <p>Mỗi thành viên được mang theo:</p>
                  <ul className="space-y-2 pl-4 mt-2">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      1 kiện 7kg xách tay
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      1 kiện 10kg ký gửi
                    </li>
                  </ul>
                  <p className="mt-2 italic text-sm">Trường hợp hành lý nhiều hơn số kg quy định, thành viên tự deal với Buddy của mình nhe</p>
                </div>
              </div>
            </Card>

            {/* PERSONAL Section */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">PERSONAL</h3>
              <div className="space-y-6">
                {/* Đổ Race */}
                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">Đổ Race:</h4>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Quần race (quần dài) x 2
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Khăn đa năng x 2
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Sleevers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Giày Sandal
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Giày Trail
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Bình nước
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Vớ x 4
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Đồng hồ thể thao
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Vest nước
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Gậy Trek (nếu cần)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Kính mát
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Nón
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Áo mưa (loại áo / quần riêng)
                    </li>
                  </ul>
                </div>

                {/* Đồ Tour */}
                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">Đồ Tour:</h4>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Quần Bơi
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Áo bơi chống nắng
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Dép bơi
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Kính bơi
                    </li>
                  </ul>
                </div>

                {/* Quần áo */}
                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">Quần áo:</h4>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Áo Team mới
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Đồ mặc ngày 26-29-30/3
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Đồ ngủ mặc campsite (ưu tiên đồ ấm)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Đồ Gala Dinner
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Dép mang campsite
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Khăn nhanh khô
                    </li>
                  </ul>
                </div>

                {/* Thuốc men */}
                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">Thuốc men:</h4>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Viên muối: 6 viên
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Thuốc cá nhân
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Kem chống nắng
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Thuốc chống muỗi
                    </li>
                  </ul>
                </div>

                {/* Đồ điện tử */}
                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">Đồ điện tử:</h4>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Pin dự phòng
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Charge pin
                    </li>
                  </ul>
                </div>

                {/* Khác */}
                <div>
                  <h4 className="font-semibold mb-2 text-purple-500">Khác:</h4>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Trà & Cafe
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Rượu chè
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-600" />
                      Cờ bạc
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Important Information */}
        <section id="important">
          <SectionHeading
            icon={Info}
            title="Thông Tin Quan Trọng"
            iconClassName="text-red-600"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span>Thông Tin Liên Hệ</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <UserCircle2 className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Ban Tổ Chức</h4>
                    <p>Ông Nguyễn Anh Đức - Trưởng Ban tổ chức</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>duc.nguyen@oxalisadventure.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Điện Thoại</h4>
                    <p>0914 908 855</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Flight Information */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-600" />
                <span>Thông Tin Chuyến Bay</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Mã Đặt Chỗ</h4>
                    <p>AHMGVU</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">Chuyến Đi</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p>VJ266 - 26/3/2025 - Eco</p>
                    <p>TSN → Đồng Hới</p>
                    <p>07:00 - 08:35</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="w-4 h-4 rotate-180 text-blue-600" />
                    <span className="font-semibold">Chuyến Về</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p>VJ263 - 30/3/2025 - Eco</p>
                    <p>Đồng Hới → TSN</p>
                    <p>19:10 - 20:40</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Hotel Information */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Hotel className="w-5 h-5 text-emerald-600" />
                <span>Khách Sạn Phong Nha</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Đoàn Gia Resort Phong Nha</h4>
                    <p>ĐT20, Sơn Trạch, Bố Trạch, Quảng Bình</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Điện Thoại</h4>
                    <p>0983 799 999</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Emergency Information */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span>Thông Tin Khẩn Cấp</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Lưu Ý Quan Trọng</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Tuân thủ hướng dẫn của BTC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Giữ gìn vệ sinh môi trường</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Hỗ trợ đồng đội khi cần thiết</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Mang theo giấy tờ tùy thân</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </Container>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-24">
        <Container className="text-center">
          <p> 2024 Team BÉT - Tu Lan Race 2025</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;